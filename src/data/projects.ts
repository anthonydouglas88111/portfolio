import { type ProjectShowcaseListItemProps } from "@/components/projects/project-showcase";
import { type ProjectCardProps } from "@/components/projects/project-card";
import { metadata } from "@/data/metadata.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItemProps[] = [
  {
    id: "1",
    title: "JSON Tree",
    skills: ["Next.js", "Tailwind CSS", "Monaco Editor", "Vercel"],
    image: {
      LIGHT: "/assets/images/projects/jsontreeLight.webp",
      DARK: "/assets/images/projects/jsontreeDark.webp",
    },
    sourceCodeHref: "https://github.com/BUMBAIYA/jsontree",
    liveWebsiteHref: "https://jsontree.vercel.app",
  },
  {
    id: "2",
    title: "Many Games",
    skills: ["React.js", "Tailwind CSS", "SCSS", "Vite", "Redux", "Vercel"],
    image: {
      LIGHT: "/assets/images/projects/manyGamesLight.webp",
      DARK: "/assets/images/projects/manyGamesDark.webp",
    },
    sourceCodeHref: "https://github.com/BUMBAIYA/ManyGames",
    liveWebsiteHref: "https://manygames.vercel.app",
  },
  {
    id: "3",
    title: "Kanban",
    skills: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Vercel",
      "Zustand",
      "React DND",
    ],
    image: {
      LIGHT: "/assets/images/projects/kanbanLight.webp",
      DARK: "/assets/images/projects/kanbanDark.webp",
    },
    sourceCodeHref: "https://github.com/BUMBAIYA/kanban",
    liveWebsiteHref: "https://kannban-board.vercel.app",
  },
];

export const PROJECT_DATA: ProjectCardProps[] = [
  {
    id: "1",
    title: "JSON Tree",
    category: "web",
    skills: ["Next.js", "Tailwind CSS", "Monaco Editor", "TypeScript"],
    description:
      "Visualize JSON data format in form of a tree or graph. Application is made using Nextjs, Tailwindcss and Monaco Editor. Design image can be downloaded from this app.",
    favicon: "/assets/images/projects/logos/jsontree.ico",
    images: [
      "/assets/images/projects/jsontreeLight.webp",
      "/assets/images/projects/jsontreeDark.webp",
    ],
    sourceCodeHref: "https://github.com/BUMBAIYA/jsontree",
    liveWebsiteHref: "https://jsontree.vercel.app",
  },
  {
    id: "2",
    title: "Kanban app",
    category: "web",
    skills: ["React", "TypeScript", "Tailwind CSS", "React DnD", "Zustand"],
    description:
      "Keep track of projects and tasks in different categories. Drag and drop card from tables. Assign user and priority to task and many more features. This app is made using Reactjs, Typescript, Tailwindcss and React-beautiful-dnd library.",
    favicon: "/assets/images/projects/logos/kanban.ico",
    images: [
      "/assets/images/projects/kanbanLight.webp",
      "/assets/images/projects/kanbanDark.webp",
      "/assets/images/projects/kanbanCardLight.webp",
    ],
    sourceCodeHref: "https://github.com/BUMBAIYA/kanban",
    liveWebsiteHref: "https://kannban-board.vercel.app",
  },
  {
    id: "3",
    title: "Many Games",
    category: "web",
    skills: ["React", "TypeScript", "Tailwind CSS", "Redux", "React Router"],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    favicon: "/assets/images/projects/logos/manygames.ico",
    images: [
      "/assets/images/projects/manyGamesDark.webp",
      "/assets/images/projects/manyGamesLight.webp",
      "/assets/images/projects/manyGames2048.webp",
      "/assets/images/projects/manyGamesPuzzle.webp",
      "/assets/images/projects/manyGamesWordle.webp",
    ],
    sourceCodeHref: "https://github.com/BUMBAIYA/ManyGames",
    liveWebsiteHref: "https://manygames.vercel.app",
  },
  {
    id: "4",
    title: "My portfolio",
    category: "web",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    favicon: "/favicon.ico",
    images: [
      "/assets/images/projects/portfolioDark.webp",
      "/assets/images/projects/portfolioLight.webp",
    ],
    sourceCodeHref: "https://github.com/BUMBAIYA/amitchauhan-v2",
    liveWebsiteHref: metadata.portfolioUrl,
  },
  {
    id: "5",
    title: "Covid Tracker",
    category: "web",
    skills: ["React", "JavaScript", "Material UI", "Chart.js", "REST APIs"],
    description:
      "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
    favicon: "/assets/images/projects/logos/covidtracker.ico",
    images: [
      "/assets/images/projects/covidTracker.webp",
      "/assets/images/projects/covidTrackerMap.webp",
      "/assets/images/projects/covidTrackerTable.webp",
    ],
    sourceCodeHref: "https://github.com/BUMBAIYA/CovidTracker",
    liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
  },
  {
    id: "6",
    title: "Stock predictor",
    category: "web",
    skills: [
      "React",
      "Python",
      "Flask",
      "TensorFlow",
      "Machine Learning",
      "Chart.js",
    ],
    description:
      "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
    favicon: "/assets/images/projects/logos/stockpredictor.ico",
    images: [
      "/assets/images/projects/stockPredictor.webp",
      "/assets/images/projects/stockPredictorCandleChart.webp",
      "/assets/images/projects/stockPredictorCompareChart.webp",
      "/assets/images/projects/stockPredictorLineChart.webp",
    ],
    sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
  },
];
