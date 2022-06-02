
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";

import {
  SiC,
} from "react-icons/si";

import { SiJavascript } from "react-icons/si";

import colors from "./assets/images/colors.svg";
import react from "./assets/images/logo.svg";
import notepad from "./assets/images/notepad.svg";


export const githubUsername = "rain3n";


export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <FaBootstrap className="display-4"/>,
    name: "Bootstrap",
  },
  {
    id: 5,
    skill: <FaPython className="display-4" />,
    name: "Python",
  },
  {
    id: 6,
    skill: <SiC className="display-4" />,
    name: "C",
  },
 
];

export const filteredProjects = [
  "IT110_Notes",
  "showprice",
];


export const projectData = [
  {
    image: colors,
  },
  {
    image: react,
  },
  {
    image: notepad,
  },
];


export const contactInfo = {
  email: "renel.morales01999@gmail.com",
  phone: "09184490399",
};
