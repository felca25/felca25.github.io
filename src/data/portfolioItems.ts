import { parseFrontmatter } from '@/utils/markdown';

export interface PortfolioItem {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  images: string[];
  date: string;
  category: string;
  link?: string;
  content: string;
  index: number;
}

// Get URLs to markdown files
const projectModules = import.meta.glob('../../data/portfolio/*.md', { as: 'url', eager: true });

export let portfolioItems: PortfolioItem[] = [];

// Use Promise.all to load files - React component will wait for this
export const portfolioItemsPromise = Promise.all(
  Object.values(projectModules).map(async (url) => {
    try {
      const response = await fetch(url as string);
      const raw = await response.text();
      if (typeof raw !== 'string') return null;
      
      const { attributes, body } = parseFrontmatter(raw);
      const attrs: any = typeof attributes === 'object' && attributes !== null ? { ...attributes } : {};
      if (typeof attrs.images === 'string') attrs.images = [attrs.images];
      if (typeof attrs.tech === 'string') attrs.tech = [attrs.tech];
      const normalizedBody = body.replace(/\r\n?/g, '\n').trim();
      return { ...attrs, content: normalizedBody } as PortfolioItem;
    } catch (error) {
      console.error('Error parsing portfolio item:', error);
      return null;
    }
  })
).then((items) => {
  portfolioItems = items
    .filter((i): i is PortfolioItem => i !== null)
    .sort((a, b) => (a.index ?? 999) - (b.index ?? 999));
  return portfolioItems;
});
