import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EDUCATION: ExperienceShowcaseListItemProps[] = [
  {
    title: "Master of Computer engineering",
    organisation: {
      name: "Ryerson University",
      href: "https://www.ryerson.ca/",
    },
    date: "2009-2013",
    location: "Toronto, Ontario",
    description:
      "Relevant courses included Data Structures and Algorithms, Web Design, Cloud Computing, Artificial Neural Network and Database Management.",
  },
  {
    title: "High School",
    organisation: {
      name: "Toronto District School Board",
      href: "https://www.tdsb.on.ca/",
    },
    date: "2007-2008",
    location: "Toronto, Ontario",
    description:
      "Completed high school with a focus on Mathematics and Computer Science. Developed strong foundation in programming and problem-solving skills.",
  },
  {
    title: "Secondary School",
    organisation: {
      name: "Forest Hill",
      href: "http://www.fhci.net/",
    },
    date: "2004-2007",
    location: "Toronto, Ontario",
    description:
      "Learned good values, dedication, and discipline. Played district football for 5 years.",
  },
];
