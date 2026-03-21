import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Mail, Calendar, Github, Linkedin } from 'lucide-react';
import { blogPostsPromise, BlogPost } from '@/data/blogPosts';
import { siteConfig } from '@/data/siteConfig';
import { portfolioItemsPromise, PortfolioItem } from '@/data/portfolioItems';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Index = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    // Wait for both data sources to load
    Promise.all([blogPostsPromise, portfolioItemsPromise]).then(([blogs, portfolio]) => {
      setBlogPosts(blogs);
      setPortfolioItems(portfolio);
    });
  }, []);

  const handleContactClick = () => {
    window.location.href = `mailto:${siteConfig.email}`;
  };

  return (
    <div className={`min-h-screen bg-white ${siteConfig.fontClass}`}>
      <Header />

      {/* Hero Section */}
      <section className="pt-[72px] sm:pt-[104px] pb-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#4A4A4A] mb-4">
            {siteConfig.description}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
            Building the future where software and engineering meet.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <Card key={item.slug} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={item.images?.[0]}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.tech?.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Link to={`/project/${item.slug}`} className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
                    View Details
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Blog</h2>
          
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <CardTitle className="text-xl hover:text-blue-600 cursor-pointer">
                      {post.title}
                    </CardTitle>
                  </Link>
                  <CardDescription>
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link to={`/blog/${post.slug}`} className="text-sm text-gray-600 hover:text-gray-900">
                      Read More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
