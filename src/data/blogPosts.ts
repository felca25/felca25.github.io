import { parseFrontmatter } from '@/utils/markdown';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  content: string;
}

// Get URLs to markdown files
const postModules = import.meta.glob('../../data/posts/*.md', { as: 'url', eager: true });

export let blogPosts: BlogPost[] = [];

// Use Promise.all to load files - React component will wait for this
export const blogPostsPromise = Promise.all(
  Object.values(postModules).map(async (url) => {
    try {
      const response = await fetch(url as string);
      const raw = await response.text();
      if (typeof raw !== 'string') return null;
      
      const { attributes, body } = parseFrontmatter(raw);
      return { ...(attributes as Record<string, any>), content: body } as BlogPost;
    } catch (error) {
      console.error('Error parsing blog post:', error);
      return null;
    }
  })
).then((posts) => {
  blogPosts = posts.filter((p): p is BlogPost => p !== null);
  return blogPosts;
});
