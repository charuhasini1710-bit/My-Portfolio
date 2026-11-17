import type { LucideIcon } from "lucide-react";
import { Award, Code2, Rocket, Sparkles, Trophy } from "lucide-react";

export interface Achievement {
  id: string;
  icon: LucideIcon;
  title: string;
  issuer: string;
  category: "Certification" | "Hackathon" | "Sports";
  description: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    icon: Award,
    title: "Front-End Web Developer",
    issuer: "Infosys Springboard",
    category: "Certification",
    description:
      "Completed certification in front-end web development covering HTML, CSS, and JavaScript.",
  },
  {
    id: "ach-2",
    icon: Sparkles,
    title: "Prompt Engineering for Developers",
    issuer: "Certification",
    category: "Certification",
    description:
      "Learned to design effective prompts and build with large language models.",
  },
  {
    id: "ach-3",
    icon: Code2,
    title: "HTML5, JavaScript & CSS3",
    issuer: "Certification",
    category: "Certification",
    description: "Certified in core web technologies for building modern websites.",
  },
  {
    id: "ach-4",
    icon: Rocket,
    title: "GenAI Hackathon",
    issuer: "College × GenAIVersity",
    category: "Hackathon",
    description:
      "Participated in a GenAI Hackathon organized by the college in collaboration with GenAIVersity.",
  },
  {
    id: "ach-5",
    icon: Trophy,
    title: "Winner, Badminton",
    issuer: "College Sports Event",
    category: "Sports",
    description: "Won the badminton event at the college sports meet.",
  },
];
