export interface Post {
  slug: string;
  title: string;
  category: string;
  date: string;
  height: string;
}

export const posts: Post[] = [
  { slug: "sustainable-urban-living", title: "The Future of Sustainable Urban Living", category: "Design", date: "Jul 12, 2026", height: "aspect-[4/3]" },
  { slug: "materiality-brutalism", title: "Materiality: The Return of Brutalism", category: "Architecture", date: "Jun 28, 2026", height: "aspect-square" },
  { slug: "designing-for-wellness", title: "Designing for Wellness in Commercial Spaces", category: "Interiors", date: "Jun 15, 2026", height: "aspect-[4/3]" },
];