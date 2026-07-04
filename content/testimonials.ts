export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Optik didn't just design our home; they completely transformed the way we interact with our environment. The attention to detail is unparalleled.",
    author: "Sarah Jenkins",
    role: "Private Client",
    rating: 5
  },
  {
    quote: "Working with Optik on our new tech campus was a revelation. They understood our need for collaborative spaces and delivered beyond expectations.",
    author: "Michael Chang",
    role: "CEO, TechCorp",
    rating: 5
  },
  {
    quote: "The most visionary architecture firm we've ever partnered with. Their commitment to sustainability is woven into every aspect of their design.",
    author: "Elena Rodriguez",
    role: "City Planner",
    rating: 5
  }
];