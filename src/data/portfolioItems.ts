import fm from 'front-matter';

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

// Use '../../data/portfolio/*.md' relative to src/data/
const projectFiles = import.meta.glob('../../data/portfolio/*.md', { query: '?raw', eager: true });

export const portfolioItems: PortfolioItem[] = Object.values(projectFiles)
  .map((mod: any) => {
    const raw = typeof mod === 'string' ? mod : mod.default;
    if (typeof raw !== 'string') {
      throw new Error('Markdown file could not be loaded as a string.');
    }
    const { attributes, body } = fm(raw);
    const attrs: any = typeof attributes === 'object' && attributes !== null ? { ...attributes } : {};
    if (typeof attrs.images === 'string') attrs.images = [attrs.images];
    if (typeof attrs.tech === 'string') attrs.tech = [attrs.tech];
    // Normalize line endings to LF and trim whitespace only
    const normalizedBody = body.replace(/\r\n?/g, '\n').trim();
    return { ...attrs, content: normalizedBody } as PortfolioItem;
  })
  .filter(item => item.index !== 0)
  .sort((a, b) => (a.index ?? 999) - (b.index ?? 999));
