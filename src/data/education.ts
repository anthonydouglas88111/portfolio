import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EDUCATION: ExperienceShowcaseListItemProps[] = [
  {
    title: "Master of Computer Engineering",
    organisation: {
      name: "Ryerson University",
      href: "https://www.ryerson.ca/",
    },
    date: "2008-2012",
    location: "Toronto, Ontario",
    description:
      "Relevant courses included Data Structures and Algorithms, Web Design, Cloud Computing, Artificial Neural Network and Database Management.",
  },
  {
    title: "Bachelor of Computer Engineering",
    organisation: {
      name: "Northern Lights College",
      href: "https://www.nlc.bc.ca/",
    },
    date: "2007-2008",
    location: "Dawson Creek, British Columbia",
    description:
      "Studied core computer engineering principles including digital systems, computer architecture, software engineering, and data structures. Developed practical skills through hands-on projects and laboratory work.",
  },
  {
    title: "High school",
    organisation: {
      name: "Forest Hill Collegiate Institute",
      href: "http://www.fhci.net/",
    },
    date: "2002-2006",
    location: "Toronto, Ontario",
    description:
      "Completed high school with a focus on Mathematics and Computer Science. Developed strong foundation in programming and problem-solving skills.",
  },
];
