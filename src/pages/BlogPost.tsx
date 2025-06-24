
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Mail, Calendar, Github, Linkedin } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

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
                  <Button variant="outline" size="sm">
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
                <Button variant="outline" size="sm">
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

        <div className="prose prose-lg max-w-none">
          <p>This is where the full blog post content would go. You can add your content here for each blog post.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
