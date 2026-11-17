import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiCss3,
  SiDart,
  SiExpress,
  SiFastapi,
  SiFastify,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiOpencv,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiStreamlit,
} from "react-icons/si";
import { TbBrain } from "react-icons/tb";

import elearning from "@/assets/images/Projects/elearning.svg";
import ambulance from "@/assets/images/Projects/ambulance.svg";
import library from "@/assets/images/Projects/library.svg";
import portfolio from "@/assets/images/Projects/portfolio.svg";
import emi from "@/assets/images/Projects/emi.svg";

export interface TechIcon {
  id: string;
  icon: IconType;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  github?: string;
  link?: string;
  image?: string;
  content: string;
  stack: TechIcon[];
}

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "E-Learning Portal",
    github: "https://github.com/charuhasini1710-bit/e-learning_portal",
    image: elearning,
    content:
      "Full-stack e-learning platform with authentication, course & enrollment modules, and AJAX-based search & filtering. Capstone project of the ApexPlanet internship.",
    stack: [
      { id: "icon-1", icon: SiPhp, name: "PHP" },
      { id: "icon-2", icon: SiMysql, name: "MySQL" },
      { id: "icon-3", icon: SiJavascript, name: "JavaScript" },
      { id: "icon-4", icon: SiBootstrap, name: "Bootstrap" },
      { id: "icon-5", icon: SiHtml5, name: "HTML" },
    ],
  },
  {
    id: "project-2",
    title: "Ambulance Dispatch App",
    github: "https://github.com/Deepenthusiastic23/Ambulance-Dispatch-App",
    image: ambulance,
    content:
      "City-scale AI ambulance dispatch system (100-vehicle fleet; Patient, Driver & Admin apps) with 4 AI models for severity triage, ambulance recommendation, routing, and ETA.",
    stack: [
      { id: "icon-1", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-2", icon: SiFastify, name: "Fastify" },
      { id: "icon-3", icon: SiPython, name: "Python" },
      { id: "icon-4", icon: SiFastapi, name: "FastAPI" },
      { id: "icon-5", icon: SiPostgresql, name: "PostGIS" },
      { id: "icon-6", icon: SiRedis, name: "Redis" },
      { id: "icon-7", icon: TbBrain, name: "AI / ML" },
    ],
  },
  {
    id: "project-3",
    title: "Smart Digital Library (SDLBMS)",
    link: "https://jntugv-library.vercel.app/",
    image: library,
    content:
      "Digital library platform mapping book locations (Room → Section → Rack → Shelf → Position) with real-time status, barcode/QR check-in/out, weighted search, and an admin analytics dashboard.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React" },
      { id: "icon-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-3", icon: SiExpress, name: "Express" },
      { id: "icon-4", icon: SiPostgresql, name: "PostgreSQL" },
    ],
  },
  {
    id: "project-4",
    title: "Image Filter Studio",
    github: "https://github.com/charuhasini1710-bit/Image-Filter-Studio",
    image: portfolio,
    content:
      "Interactive image processing and filtering studio providing real-time filters, transformations, and digital enhancements.",
    stack: [
      { id: "icon-1", icon: SiPython, name: "Python" },
      { id: "icon-2", icon: SiOpencv, name: "OpenCV" },
      { id: "icon-3", icon: SiStreamlit, name: "Streamlit" },
    ],
  },
  {
    id: "project-5",
    title: "Loan EMI Calculator",
    github: "https://github.com/charuhasini1710-bit/Loan-EMI-Calculator",
    image: emi,
    content:
      "A Flutter mobile app that calculates monthly loan EMIs from the loan amount, interest rate, and tenure.",
    stack: [
      { id: "icon-1", icon: SiFlutter, name: "Flutter" },
      { id: "icon-2", icon: SiDart, name: "Dart" },
    ],
  },
];
