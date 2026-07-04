export interface Award {
  name: string;
  year: string;
  category: string;
}

export const awards: Award[] = [
  { name: "Global Architecture Award", year: "2025", category: "Best Residential" },
  { name: "Urban Design Excellence", year: "2024", category: "Masterplan" },
  { name: "Sustainable Building of the Year", year: "2023", category: "Commercial" },
  { name: "Innovation in Architecture", year: "2022", category: "Public Space" },
];