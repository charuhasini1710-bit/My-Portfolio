import type { IconType } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import {
  SiC,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiFigma,
  SiFlask,
  SiGit,
  SiGooglecolab,
  SiGooglegemini,
  SiJavascript,
  SiJupyter,
  SiLangchain,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiOpencv,
  SiOpenjdk,
  SiPandas,
  SiPhpmyadmin,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiTensorflow,
  SiVercel,
  SiXampp,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

export interface Skill {
  id: string;
  icon: IconType;
  name: string;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export const SKILLS_LIST: SkillGroup[] = [
  {
    title: "Languages & Databases",
    items: [
      { id: "pl-1", icon: SiPython, name: "Python" },
      { id: "pl-2", icon: SiOpenjdk, name: "Java" },
      { id: "pl-3", icon: SiJavascript, name: "JavaScript" },
      { id: "pl-4", icon: TbSql, name: "SQL" },
      { id: "pl-5", icon: SiC, name: "C" },
      { id: "pl-6", icon: SiPostgresql, name: "PostgreSQL" },
      { id: "pl-7", icon: SiMysql, name: "MySQL" },
    ],
  },
  {
    title: "Web Frameworks",
    items: [
      { id: "f-1", icon: SiReact, name: "React" },
      { id: "f-2", icon: SiNextdotjs, name: "Next.js" },
      { id: "f-3", icon: SiFlask, name: "Flask" },
      { id: "f-4", icon: SiDjango, name: "Django" },
      { id: "f-5", icon: SiFastapi, name: "FastAPI" },
    ],
  },
  {
    title: "AI / ML",
    items: [
      { id: "ai-1", icon: SiTensorflow, name: "TensorFlow" },
      { id: "ai-2", icon: SiPytorch, name: "PyTorch" },
      { id: "ai-3", icon: SiScikitlearn, name: "Scikit-learn" },
      { id: "ai-4", icon: SiLangchain, name: "LangChain" },
      { id: "ai-5", icon: SiOpencv, name: "OpenCV" },
      { id: "ai-6", icon: SiPandas, name: "Pandas" },
      { id: "ai-7", icon: SiOpenai, name: "OpenAI API" },
      { id: "ai-8", icon: SiGooglegemini, name: "Gemini API" },
      { id: "ai-9", icon: SiJupyter, name: "Jupyter" },
      { id: "ai-10", icon: SiGooglecolab, name: "Colab" },
    ],
  },
  {
    title: "Tools",
    items: [
      { id: "t-1", icon: SiGit, name: "Git" },
      { id: "t-2", icon: AiFillGithub, name: "GitHub" },
      { id: "t-3", icon: SiPostman, name: "Postman" },
      { id: "t-4", icon: SiFigma, name: "Figma" },
      { id: "t-5", icon: VscCode, name: "VS Code" },
      { id: "t-6", icon: SiDocker, name: "Docker" },
      { id: "t-7", icon: SiXampp, name: "XAMPP" },
      { id: "t-8", icon: SiPhpmyadmin, name: "phpMyAdmin" },
      { id: "t-9", icon: SiVercel, name: "Vercel" },
    ],
  },
];
