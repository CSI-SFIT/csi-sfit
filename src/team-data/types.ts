
export type Category =
  | "Faculty"
  | "Core"
  | "Tech Team"
  | "Creative Team"
  | "PR Team"
  | "Marketing Team"
  | "Multimedia Team";

export interface Member {
  name: string;
  title: string;
  category: Category;
  instagramLink?: string;
  linkedinLink?: string;
  githubLink?: string;
  email?: string;
  image?: string; // absolute path from /public (e.g., "/assets/team2026/Core/Shahil.webp")
}
