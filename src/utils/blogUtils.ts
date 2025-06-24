
import { BlogPost } from '@/data/blogPosts';

/**
 * Helper function to create a new blog post from markdown content
 * Usage: Add this to your blogPosts array in src/data/blogPosts.ts
 */
export const createBlogPost = (
  id: string,
  title: string,
  excerpt: string,
  date: string,
  readTime: string,
  category: string,
  slug: string,
  markdownContent: string
): BlogPost => {
  return {
    id,
    title,
    excerpt,
    date,
    readTime,
    category,
    slug,
    content: markdownContent
  };
};

/**
 * Generate a URL-friendly slug from a title
 */
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};
