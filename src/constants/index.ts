export { SOCIAL_MEDIA } from "./socialMedia";
export type { SocialLink } from "./socialMedia";

export { SKILLS_LIST } from "./skillsList";
export type { Skill, SkillGroup } from "./skillsList";

export { EXPERIENCES } from "./experience";
export type { Experience, Position, TechItem } from "./experience";

export { EDUCATION_LIST } from "./education";
export type { Education } from "./education";

export { PROJECTS } from "./projects";
export type { Project, TechIcon } from "./projects";

export { ACHIEVEMENTS } from "./achievements";
export type { Achievement } from "./achievements";

// Resume PDF is served from /public
export const RESUME_LINK = "/Charu_Brunda_Hasini_Resume.pdf";
export const REPO_LINK = "https://github.com/charuhasini1710-bit/Portfolio";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/charu-brunda-hasini-vallabhuni/";

export const ABOUT_ME = {
  name: "Vallabhuni Charu Brunda Hasini",
  firstName: "Charu",
  lastName: "Brunda Hasini",
  tagLine:
    "B.Tech IT @JNTU-GV · Full Stack & AI/ML Developer",
  intro: "Full Stack & AI/ML developer based in India.",
  email: "charuhasini1710@gmail.com",
  phone: "+91 9492168089",
};

export const NAV_LINKS = [
  { link: "#experience", title: "Experience" },
  { link: "#skills", title: "Skills" },
  { link: "#education", title: "Education" },
  { link: "#projects", title: "Projects" },
  { link: "#achievements", title: "Achievements" },
  { link: "#contact", title: "Contact" },
];
