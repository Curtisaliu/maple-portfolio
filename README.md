# Maple Portfolio

A MapleStory-inspired developer portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

This project serves as both my personal portfolio and an ongoing learning project where I document my growth across frontend development, cloud engineering, infrastructure, and software development.

## About the Project

The goal of this portfolio is to create something more personal than a traditional developer site.

Rather than using a generic portfolio template, the design takes inspiration from MapleStory-style UI elements, character progression, skill windows, quest logs, and world navigation.

The project will continue to evolve over time as I learn new technologies and complete additional projects.

## Current Version

### v1.5.0

This version adds a Certifications page, makes the character profile update itself, and deploys the site to AWS.

New in v1.5.0:

- Certifications / Medals page, grouped into AWS, Genesys, and other certifications
- Dynamic level and EXP bar calculated from the current date, with an EXP percentage
- MapleStory-inspired typography using Fredoka for headings and Nunito for body text
- Static export for hosting on Amazon S3 and CloudFront
- Active-page highlighting fix in the navigation bar
- Next.js upgrade with security fixes

Current features include:

- Multi-page navigation using the Next.js App Router
- MapleStory-inspired character profile
- Level and EXP progression that updates automatically
- About / Character History section
- Categorized skills and proficiency meters
- IVR platform experience
- Certifications / Medals section
- Project / Quest Log section
- Contact page with LinkedIn, GitHub, and email links
- Responsive layouts for desktop and mobile
- Shared component and design system structure
- Henesys-inspired homepage styling

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- HTML / CSS
- AWS (S3, CloudFront, Certificate Manager)
- Git / GitHub

## Deployment

The site is live at [curtisaliu.dev](https://curtisaliu.dev).

- Next.js builds the site as a static export (`npm run build` outputs to `out/`)
- The static files are hosted in an Amazon S3 bucket
- Amazon CloudFront serves the site over HTTPS as the CDN
- The domain is registered with Porkbun, which also manages DNS

## Project Structure

```text
app/
  about/
  certifications/
  contact/
  projects/
  skills/

components/
  Hero.tsx
  CharacterStats.tsx
  NavBar.tsx
  SectionWindow.tsx
  AboutSection.tsx
  SkillsSection.tsx
  SkillCard.tsx
  CertificationsSection.tsx
  CertificationCard.tsx
  ProjectsSection.tsx
  ProjectCard.tsx
  ContactSection.tsx

data/
  portfolioData.ts

lib/
  characterStats.ts

types/
  portfolio.ts
```

## Development Goals

This project is intentionally iterative and will continue to evolve as I expand my skills and complete new projects.

Future versions may include:

- Additional MapleStory-inspired page themes
- Project detail pages
- Interactive character elements
- Animations and UI polish
- Dynamic project data
- Backend functionality
- Infrastructure as Code using Terraform
- CI/CD automation

## Versioning

This project follows semantic-style versioning:

- `v1.0.0` — Initial portfolio release
- `v1.5.0` — Certifications page, dynamic character profile, and AWS deployment
- Minor versions — New features or meaningful additions
- Patch versions — Fixes and smaller improvements
- Major versions — Significant redesigns or architectural changes

Development history and notable changes will be documented in `CHANGELOG.md`.

## Purpose

This repository is public so that prospective employers, collaborators, and other developers can view the development process and see how the project evolves over time.

The project is intended to demonstrate my approach to software development, frontend architecture, cloud engineering, infrastructure, and iterative project development.

## Usage

This repository is publicly visible for portfolio and demonstration purposes.

Please do not copy, redistribute, or present the project design or source code as your own.

No open-source license is currently provided.

## Developer

Developed by **Curtis Liu**

Cloud Engineer | Software Developer | AWS & Automation | Game Dev Hobbyist