export interface Service {
  num: string;
  title: string;
  desc: string;
  tags: string[];
}

export const services: Service[] = [
  { num: "01", title: "Architecture", desc: "Full-service architectural design from concept to completion.", tags: ["Residential", "Commercial"] },
  { num: "02", title: "Interior Design", desc: "Creating cohesive, functional, and beautiful interior spaces.", tags: ["Styling", "Custom Furniture"] },
  { num: "03", title: "Urban Planning", desc: "Designing sustainable communities and master plans.", tags: ["Masterplan", "Landscape"] },
  { num: "04", title: "Consulting", desc: "Strategic advice for sustainable and innovative building.", tags: ["Feasibility", "Sustainability"] },
];