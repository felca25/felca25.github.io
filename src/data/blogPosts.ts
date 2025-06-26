import fm from 'front-matter';

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

// Use './posts/*.md' relative to src/data/
const postFiles = import.meta.glob('./posts/*.md', { query: '?raw',  eager: true });

console.log('Loaded posts:', postFiles);

export const blogPosts: BlogPost[] = Object.values(postFiles).map((mod: any) => {
  // Support both { default: string } and string
  const raw = typeof mod === 'string' ? mod : mod.default;
  if (typeof raw !== 'string') {
    throw new Error('Markdown file could not be loaded as a string.');
  }
  const { attributes, body } = fm(raw);
  return { ...(attributes as Record<string, any>), content: body } as BlogPost;
});
