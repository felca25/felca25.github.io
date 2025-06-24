
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Mail, Calendar, Github, Linkedin } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const Index = () => {
  const portfolioItems = [
    {
      title: "E-commerce Platform Optimization",
      description: "Redesigned checkout flow resulting in 40% increase in conversion rates.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      link: "#BlogPost"
    },
    {
      title: "Financial Dashboard Analytics", 
      description: "Real-time analytics dashboard processing 1M+ transactions daily.",
      tech: ["Python", "React", "MongoDB", "Redis"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      link: "#"
    },
    {
      title: "Healthcare Mobile App",
      description: "Go-to-market strategy and development for healthcare app with 100K+ downloads.",
      tech: ["React Native", "Firebase", "UI/UX"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      link: "#"
    }
  ];

  const handleContactClick = () => {
    window.location.href = 'mailto:felipe.andrade@icloud.com';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-900">Felipe Andrade</div>
            <div className="flex items-center space-x-6">
              <a href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a>
              <a href="#blog" className="text-gray-600 hover:text-gray-900">Blog</a>
              <div className="flex items-center space-x-3">
                <a href="https://github.com/felca25" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="w-5 h-5" />
                </a>
                <Button variant="outline" size="sm" onClick={handleContactClick}>
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Developer & Simulation Engineer
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
            I build scalable systems and develop simulation models. 
            10+ years experience in software development and engineering consulting.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Portfolio</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image}
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
                    {item.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <a href={item.link} className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
                    View Details
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
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
      <footer className="border-t border-gray-200 py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Felipe Andrade</h3>
              <p className="text-sm text-gray-600">Developer & Simulation Engineer</p>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/felca25" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-5 h-5" />
              </a>
              <Button variant="outline" onClick={handleContactClick}>
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
            <p>&copy; 2025 Felipe Andrade. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
