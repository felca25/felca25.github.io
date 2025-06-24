
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Consulting in the AI Era",
    excerpt: "How artificial intelligence is reshaping the consulting landscape and what it means for independent consultants.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Strategy",
    slug: "future-of-consulting-ai-era"
  },
  {
    id: "2",
    title: "Building Scalable Systems: Lessons from the Trenches",
    excerpt: "Key architectural decisions that can make or break your startup's technical foundation as you scale.",
    date: "March 8, 2024",
    readTime: "8 min read", 
    category: "Technology",
    slug: "building-scalable-systems-lessons"
  },
  {
    id: "3",
    title: "From Idea to Exit: A Framework for Startup Success",
    excerpt: "A systematic approach to building and scaling startups based on patterns observed across 50+ companies.",
    date: "February 28, 2024",
    readTime: "12 min read",
    category: "Business",
    slug: "idea-to-exit-startup-framework"
  }
];
