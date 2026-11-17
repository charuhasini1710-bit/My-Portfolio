import jntugv from "@/assets/images/Education/jntugv.svg";

export interface Education {
  id: string;
  icon: string;
  title: string;
  degree: string;
  duration: string;
  location: string;
  content1: string;
  content2: string;
}

export const EDUCATION_LIST: Education[] = [
  {
    id: "education-1",
    icon: jntugv,
    title: "Jawaharlal Nehru Technological University Gurajada, Vizianagaram",
    degree: "Bachelor of Technology",
    duration: "June 2023 — June 2027",
    location: "Vizianagaram, India",
    content1: "Branch: Information Technology",
    content2: "CGPA: 8.00",
  },
];
