export interface Project {
  slug: string;
  title: string;
  location: string;
  span: string;
  height: string;
}

export const projects: Project[] = [
  { slug: "the-highline", title: "The Highline", location: "New York, NY", span: "col-span-12 md:col-span-8", height: "h-[600px]" },
  { slug: "eco-villa", title: "Eco Villa", location: "Portland, OR", span: "col-span-12 md:col-span-4", height: "h-[600px]" },
  { slug: "tech-campus", title: "Tech Campus", location: "Austin, TX", span: "col-span-12 md:col-span-6", height: "h-[500px]" },
  { slug: "desert-house", title: "Desert House", location: "Phoenix, AZ", span: "col-span-12 md:col-span-6", height: "h-[500px]" },
];