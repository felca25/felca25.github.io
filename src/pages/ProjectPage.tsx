import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Mail, Calendar, Github, Linkedin, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { portfolioItems } from '@/data/portfolioItems';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = portfolioItems.find(p => p.slug === slug);

  const handleContactClick = () => {
    window.location.href = `mailto:${siteConfig.email}`;
  };

  if (!project) {
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
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h1>
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
              {project.category}
            </Badge>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              {project.date}
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{project.description}</p>
          <div className="mt-4 text-sm text-gray-500">{project.tech && project.tech.join(', ')}</div>
        </header>
        <div className="grid gap-6 mb-8">
          {project.images && project.images.map((img: string, idx: number) => (
            <img key={idx} src={img} alt={project.title + ' screenshot ' + (idx+1)} className="rounded-lg w-full object-cover" />
          ))}
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-8">
            View Live <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        )}
        <div className="prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-gray-800 prose-code:bg-gray-100 prose-pre:bg-gray-50 max-w-none mt-8">
          {project.content ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >{project.content}</ReactMarkdown>
          ) : null}
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default ProjectPage;
