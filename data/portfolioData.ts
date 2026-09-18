import type {
  SkillCategory,
  ProjectCategory,
} from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    name: "Cloud",
    skills: [
      { name: "AWS", level: 8 },
      { name: "GCP", level: 1 },
    ],
  },
  {
    name: "IVR Platforms",
    skills: [
      { name: "Amazon Connect", level: 8 },
      { name: "Genesys Cloud CX", level: 7 },
    ],
  },
  {
    name: "Languages",
    skills: [
      { name: "TypeScript / JavaScript", level: 7 },
      { name: "Python", level: 5 },
      { name: "Ruby", level: 5 },
      { name: "C#", level: 1 },
    ],
  },
  {
    name: "Frameworks & Technologies",
    skills: [
      { name: "React", level: 7 },
      { name: "Next.js", level: 5 },
      { name: "Ruby on Rails", level: 5 },
      { name: "Node.js", level: 6 },
      { name: "Tailwind CSS", level: 6 },
    ],
  },
  {
    name: "Infrastructure",
    skills: [
      { name: "Terraform", level: 3 },
      { name: "CI/CD", level: 4 },
      { name: "Serverless Architecture", level: 7 },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", level: 5 },
      { name: "GitHub", level: 5 },
      { name: "npm", level: 5 },
      { name: "PowerShell", level: 4 },
    ],
  },
];

export const projectCategories: ProjectCategory[] = [
  {
    name: "Active Quests",
    projects: [
      {
        title: "Cloudyy",
        status: "Quest In Progress",
        description:
          "A cloud-focused application built with TypeScript and Node.js.",
        technologies: ["TypeScript", "Node.js", "AWS"],
      },
      {
        title: "Maple Portfolio",
        status: "Quest In Progress",
        description:
          "A MapleStory-inspired developer portfolio built with Next.js.",
        technologies: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
        ],
      },
    ],
  },
  {
    name: "Planned Quests",
    projects: [
      {
        title: "Terraform Lab",
        status: "Quest Planned",
        description:
          "Infrastructure project for learning Terraform and AWS.",
        technologies: ["Terraform", "AWS"],
      },
    ],
  },
];