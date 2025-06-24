
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Mail, Calendar, Github, Linkedin } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  const handleContactClick = () => {
    window.location.href = 'mailto:your.email@example.com';
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <nav className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-xl font-semibold text-gray-900">Your Name</Link>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
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

        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-semibold text-gray-900">Your Name</Link>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
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

      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>

        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="text-sm">
              {post.category}
            </Badge>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{post.excerpt}</p>
          <div className="mt-4 text-sm text-gray-500">{post.readTime}</div>
        </header>

        <div className="prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-gray-800 prose-code:bg-gray-100 prose-pre:bg-gray-50 max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
