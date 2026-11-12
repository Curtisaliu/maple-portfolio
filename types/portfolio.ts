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

export type Certification = {
  name: string;
  issuer: string;
  issued?: string;
  expires?: string;
  credentialUrl?: string;
};

export type CertificationCategory = {
  name: string;
  certifications: Certification[];
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
};

export type ProjectCategory = {
  name: string;
  projects: Project[];
};