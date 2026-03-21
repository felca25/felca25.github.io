import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Mail, Calendar, Github, Linkedin } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import { siteConfig } from '@/data/siteConfig';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const contentToRender = post?.content ?? '';

  const handleContactClick = () => {
    window.location.href = `mailto:${siteConfig.email}`;
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <nav className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-xl font-semibold text-gray-900">{siteConfig.name}</Link>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
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
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <article className="max-w-4xl mx-auto px-6 pt-[72px] sm:pt-[104px] pb-16">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="text-sm">
              {post?.category ?? 'Blog'}
            </Badge>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              {post?.date ?? ''}
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post?.title ?? slug}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{post?.excerpt ?? ''}</p>
          <div className="mt-4 text-sm text-gray-500">{post?.readTime ?? ''}</div>
        </header>
        <div className="prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-gray-800 prose-code:bg-gray-100 prose-pre:bg-gray-50 max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />, 
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-3 text-gray-900" {...props} />, 
              h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900" {...props} />, 
              h4: ({node, ...props}) => <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-900" {...props} />, 
              h5: ({node, ...props}) => <h5 className="text-base font-semibold mt-3 mb-1 text-gray-900" {...props} />, 
              h6: ({node, ...props}) => <h6 className="text-sm font-semibold mt-2 mb-1 text-gray-900" {...props} />, 
            }}
          >{contentToRender}</ReactMarkdown>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
