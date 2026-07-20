export type ProjectKey = "techcomms" | "sentinel" | "movie-room" | "macros-ai";

export type ArchitectureNode = {
  id: string;
  label: string;
  detail: string;
  x: number;
  y: number;
};

export type Project = {
  key: ProjectKey;
  title: string;
  role: string;
  impact: string;
  problem: string;
  solution: string;
  decisions: string[];
  challenges: string[];
  results: string[];
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  accent: string;
  architecture: ArchitectureNode[];
  caseStudySections?: {
    title: string;
    summary?: string;
    items: string[];
  }[];
};

export type SkillCategory = {
  name: string;
  description: string;
  skills: {
    name: string;
    projects: ProjectKey[];
  }[];
};

export type Metric = {
  label: string;
  value: number;
  suffix: string;
  context: string;
};
