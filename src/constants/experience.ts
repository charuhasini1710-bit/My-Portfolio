import type { IconType } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import {
  SiBootstrap,
  SiChartdotjs,
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
} from "react-icons/si";
import { TbApi, TbBrain, TbRobot } from "react-icons/tb";

import apexplanet from "@/assets/images/Experience/apexplanet.svg";
import youngbot from "@/assets/images/Experience/youngbot.svg";
import uptoskills from "@/assets/images/Experience/uptoskills.svg";
import devsquad from "@/assets/images/Experience/devsquad.svg";

export interface TechItem {
  id: string;
  icon: IconType;
  name: string;
}

export interface Position {
  title: string;
  duration: string;
  content?: { text: string; link?: string; tech?: TechItem[] }[];
}

export interface Experience {
  organisation: string;
  logo: string;
  link?: string;
  positions: Position[];
}

export const EXPERIENCES: Experience[] = [
  {
    organisation: "ApexPlanet Software Pvt. Ltd.",
    logo: apexplanet,
    link: "https://www.apexplanet.in/",
    positions: [
      {
        title: "Full Stack Web Development Intern (Remote)",
        duration: "May 2026 — Jul 2026",
        content: [
          {
            text: "Completed an 8-week virtual internship (11 May – 09 Jul 2026) in Full Stack Web Development, covering frontend design, backend integration, authentication, and deployment.",
            tech: [
              { id: "ap-1", icon: SiPhp, name: "PHP" },
              { id: "ap-2", icon: SiMysql, name: "MySQL" },
              { id: "ap-3", icon: SiHtml5, name: "HTML" },
              { id: "ap-4", icon: SiCss3, name: "CSS" },
              { id: "ap-5", icon: SiJavascript, name: "JavaScript" },
              { id: "ap-6", icon: SiBootstrap, name: "Bootstrap" },
              { id: "ap-7", icon: SiGit, name: "Git" },
              { id: "ap-8", icon: AiFillGithub, name: "GitHub" },
            ],
          },
          {
            text: "Built and deployed a personal portfolio website, a responsive login/registration UI, and a CRUD-based user management system with session-based authentication.",
          },
          {
            text: "Developed and deployed an E-Learning Portal as the capstone project, featuring authentication, core modules, and AJAX-based search & filtering.",
            link: "https://github.com/charuhasini1710-bit/e-learning_portal",
          },
        ],
      },
    ],
  },
  {
    organisation: "Youngbot Academy",
    logo: youngbot,
    positions: [
      {
        title: "React JS Developer Intern (Remote)",
        duration: "May 2026 — Jun 2026",
        content: [
          {
            text: "Completed a 2-month internship (1 May – 30 Jun 2026) focused on React JS development through hands-on application projects.",
            tech: [
              { id: "yb-1", icon: SiReact, name: "React" },
              { id: "yb-2", icon: SiJavascript, name: "JavaScript" },
              { id: "yb-3", icon: TbApi, name: "REST APIs" },
              { id: "yb-4", icon: SiChartdotjs, name: "Chart.js" },
              { id: "yb-5", icon: SiNodedotjs, name: "Node.js" },
              { id: "yb-6", icon: SiExpress, name: "Express" },
              { id: "yb-7", icon: SiMongodb, name: "MongoDB" },
            ],
          },
          {
            text: "Built a Digital Clock & Stopwatch, a Recipe Finder app (MealDB API), and an Image Gallery with infinite scroll (Unsplash API).",
          },
          {
            text: "Developed a Social Media Analytics Dashboard with interactive charts and a full-stack Job Portal application with an admin panel.",
          },
        ],
      },
    ],
  },
  {
    organisation: "UptoSkills",
    logo: uptoskills,
    link: "https://uptoskills.com/",
    positions: [
      {
        title: "AI & Machine Learning Intern (Remote)",
        duration: "Apr 2026 — Jul 2026",
        content: [
          {
            text: "Completed a 3-month internship (16 Apr – 16 Jul 2026) as an Artificial Intelligence / Machine Learning Intern.",
            tech: [
              { id: "us-1", icon: SiPython, name: "Python" },
              { id: "us-2", icon: TbBrain, name: "Machine Learning" },
              { id: "us-3", icon: TbRobot, name: "AI" },
            ],
          },
          {
            text: "Built the AI-powered Ambulance Dispatch App as part of this internship.",
            link: "https://github.com/Deepenthusiastic23/Ambulance-Dispatch-App",
          },
        ],
      },
    ],
  },
  {
    organisation: "Leadership — JNTU-GV",
    logo: devsquad,
    positions: [
      {
        title: "Secretary, Dev Squad Club",
        duration: "3rd Year",
        content: [
          {
            text: "Spearheading technical workshops, peer coding sessions, and project showcases; mentoring 20+ junior developers in web and AI development.",
          },
        ],
      },
      {
        title: "Technical Fest Coordinator",
        duration: "2nd Year",
        content: [
          {
            text: "Coordinated a 2-day technical symposium, managing event planning, logistics, and participant engagement.",
          },
        ],
      },
    ],
  },
];
