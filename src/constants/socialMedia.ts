import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import type { IconType } from "react-icons";

export interface SocialLink {
  id: string;
  icon: IconType;
  link: string;
  label: string;
}

export const SOCIAL_MEDIA: SocialLink[] = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/charu-brunda-hasini-vallabhuni/",
    label: "LinkedIn",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/charuhasini1710-bit",
    label: "GitHub",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:charuhasini1710@gmail.com",
    label: "Email",
  },
  {
    id: "social-media-4",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/charu-vallabhuni/",
    label: "LeetCode",
  },
];
