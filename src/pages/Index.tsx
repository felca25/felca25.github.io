
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink, Mail, Calendar, User } from 'lucide-react';

const Index = () => {
  const portfolioItems = [
    {
      title: "E-commerce Platform Optimization",
      description: "Led a complete redesign of checkout flow resulting in 40% increase in conversion rates for a major retail client.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop"
    },
    {
      title: "Financial Dashboard Analytics",
      description: "Built real-time analytics dashboard for fintech startup, processing over 1M transactions daily.",
      tech: ["Python", "React", "MongoDB", "Redis"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
    },
    {
      title: "Mobile App Strategy Consulting",
      description: "Developed go-to-market strategy for healthcare app that achieved 100K+ downloads in first quarter.",
      tech: ["Strategy", "UI/UX", "React Native", "Firebase"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop"
    }
  ];

  const blogPosts = [
    {
      title: "The Future of Consulting in the AI Era",
      excerpt: "How artificial intelligence is reshaping the consulting landscape and what it means for independent consultants.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Strategy"
    },
    {
      title: "Building Scalable Systems: Lessons from the Trenches",
      excerpt: "Key architectural decisions that can make or break your startup's technical foundation as you scale.",
      date: "March 8, 2024", 
      readTime: "8 min read",
      category: "Technology"
    },
    {
      title: "From Idea to Exit: A Framework for Startup Success",
      excerpt: "A systematic approach to building and scaling startups based on patterns observed across 50+ companies.",
      date: "February 28, 2024",
      readTime: "12 min read",
      category: "Business"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-slate-900">Your Name</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-600 hover:text-slate-900 transition-colors">Home</a>
              <a href="#portfolio" className="text-slate-600 hover:text-slate-900 transition-colors">Portfolio</a>
              <a href="#blog" className="text-slate-600 hover:text-slate-900 transition-colors">Blog</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
            </div>
            <Button onClick={scrollToContact} className="bg-blue-600 hover:bg-blue-700">
              Get in Touch
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <User className="w-4 h-4 mr-2" />
                Available for Consulting
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Building the
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> future</span>
                , one solution at a time
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                I help startups and enterprises build scalable technology solutions and develop winning strategies. 
                With 10+ years of experience, I've guided companies from seed to successful exits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start a Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                  View My Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-3xl opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
                alt="Professional workspace"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Work</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A selection of projects where I've helped organizations achieve their goals through strategic consulting and technical expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-50 text-blue-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                    View Details
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Latest Insights</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Thoughts on technology, strategy, and the future of business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-slate-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{post.readTime}</span>
                    <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Next Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you need strategic guidance, technical expertise, or end-to-end project delivery, 
            I'm here to help you achieve your goals.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Strategy Consulting</h3>
              <p className="text-blue-100">Business strategy and market positioning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Technical Leadership</h3>
              <p className="text-blue-100">Architecture design and team guidance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Project Delivery</h3>
              <p className="text-blue-100">End-to-end solution development</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule a Call
            </Button>
          </div>
          
          <div className="mt-8 text-blue-100">
            <p>Typically respond within 24 hours • Available worldwide</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">Your Name</h3>
              <p className="text-slate-400 mb-4">
                Helping organizations build the future through strategic consulting and technical excellence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Strategy Consulting</li>
                <li>Technical Leadership</li>
                <li>Project Delivery</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
