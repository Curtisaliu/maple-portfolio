export type Skill = {
  name: string;
  level: number;
};

export type Project = {
  title: string;
  status: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
};

export type ProjectCategory = {
  name: string;
  projects: Project[];
};