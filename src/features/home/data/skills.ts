import { Skill } from "../types/skill";

export const skills: Skill[] = [
  // Core Frontend Frameworks & Libraries
  { icon: "reactjs", name: "React JS" },
  { icon: "nextjs", name: "Next.js" },
  { icon: "vuejs", name: "Vue.js" },
  { icon: "nuxt", name: "Nuxt" },
  { icon: "angular", name: "Angular" },

  // Core Backend Technologies
  { icon: "nodejs", name: "Node.js" },
  { icon: "express", name: "Express.js" },
  { icon: "php", name: "PHP" },
  { icon: "laravel", name: "Laravel" },
  { icon: "python", name: "Python", isHidden: true },

  // Databases & Query Languages
  { icon: "mongodb", name: "MongoDB" },
  { icon: "postgresql", name: "PostgreSQL" },
  { icon: "graphql", name: "GraphQL" },
  { icon: "hasura", name: "Hasura" },

  // Cloud & DevOps
  { icon: "aws", name: "AWS", isHidden: true },
  { icon: "gcp", name: "Google Cloud" },
  { icon: "firebase", name: "Firebase" },
  { icon: "pinecone", name: "Pinecone", isHidden: true },
  { icon: "docker", name: "Docker", isHidden: true },

  // Styling & UI
  { icon: "tailwindcss", name: "Tailwind CSS" },
  { icon: "css3", name: "CSS3" },
  { icon: "html5", name: "HTML5" },
  { icon: "figma", name: "Figma" },

  // Programming Languages & Tooling
  { icon: "javascript", name: "JavaScript" },
  { icon: "typescript", name: "TypeScript" },
  { icon: "kotlin", name: "Kotlin", isHidden: true },

  // AI & Automation
  { icon: "openai", name: "OpenAI" },
  { icon: "langchain", name: "Langchain" },

  // Testing
  { icon: "jest", name: "Jest" },
  { icon: "testing-library", name: "Testing Library" },
  { icon: "storybook", name: "Storybook", isHidden: true },

  // Productivity & Misc
  { icon: "notion", name: "Notion" },
];