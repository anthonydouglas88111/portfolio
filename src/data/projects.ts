import { type ProjectShowcaseListItemProps } from "@/components/projects/project-showcase";
import { type ProjectCardProps } from "@/components/projects/project-card";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItemProps[] = [
  {
    index: 0,
    title: "Json Tree",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    image: {
      LIGHT: "/assets/images/projects/jsontreeLight.webp",
      DARK: "/assets/images/projects/jsontreeDark.webp",
    },
    sourceCodeHref: "https://github.com/BUMBAIYA/jsontree",
    liveWebsiteHref: "https://jsontree.vercel.app",
  },
  {
    index: 1,
    title: "Many Games",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Scss",
      "Vite",
      "React-router-dom",
      "Redux",
      "Vercel",
    ],
    image: {
      LIGHT: "/assets/images/projects/manyGamesLight.webp",
      DARK: "/assets/images/projects/manyGamesDark.webp",
    },
    sourceCodeHref: "https://github.com/BUMBAIYA/ManyGames",
    liveWebsiteHref: "https://manygames.vercel.app",
  },
  {
    index: 2,
    title: "Kanban",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/assets/images/projects/kanbanLight.webp",
      DARK: "/assets/images/projects/kanbanDark.webp",
    },
    sourceCodeHref: "https://github.com/BUMBAIYA/kanban",
    liveWebsiteHref: "https://kannban-board.vercel.app",
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Json tree",
    favicon: "/assets/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/assets/images/projects/jsontreeLight.webp",
      "/assets/images/projects/jsontreeDark.webp",
    ],
    description:
      "Visualize JSON data format in form of a tree or graph. Application is made using Nextjs, Tailwindcss and Monaco Editor. Design image can be downloaded from this app.",
    sourceCodeHref: "https://github.com/BUMBAIYA/jsontree",
    liveWebsiteHref: "https://jsontree.vercel.app",
  },
  {
    name: "Kanban app",
    favicon: "/assets/images/projects/logos/kanban.ico",
    imageUrl: [
      "/assets/images/projects/kanbanLight.webp",
      "/assets/images/projects/kanbanDark.webp",
      "/assets/images/projects/kanbanCardLight.webp",
    ],
    description:
      "Keep track of projects and tasks in different categories. Drag and drop card from tables. Assign user and priority to task and many more features. This app is made using Reactjs, Typescript, Tailwindcss and React-beautiful-dnd library.",
    sourceCodeHref: "https://github.com/BUMBAIYA/kanban",
    liveWebsiteHref: "https://kannban-board.vercel.app",
  },
  {
    name: "Many Games",
    favicon: "/assets/images/projects/logos/manygames.ico",
    imageUrl: [
      "/assets/images/projects/manyGamesDark.webp",
      "/assets/images/projects/manyGamesLight.webp",
      "/assets/images/projects/manyGames2048.webp",
      "/assets/images/projects/manyGamesPuzzle.webp",
      "/assets/images/projects/manyGamesWordle.webp",
    ],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    sourceCodeHref: "https://github.com/BUMBAIYA/ManyGames",
    liveWebsiteHref: "https://manygames.vercel.app",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/assets/images/projects/portfolioDark.webp",
      "/assets/images/projects/portfolioLight.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/BUMBAIYA/amitchauhan-v2",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Covid Tracker",
    favicon: "/assets/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/assets/images/projects/covidTracker.webp",
      "/assets/images/projects/covidTrackerMap.webp",
      "/assets/images/projects/covidTrackerTable.webp",
    ],
    description:
      "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
    sourceCodeHref: "https://github.com/BUMBAIYA/CovidTracker",
    liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
  },
  {
    name: "Stock predictor",
    favicon: "/assets/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/assets/images/projects/stockPredictor.webp",
      "/assets/images/projects/stockPredictorCandleChart.webp",
      "/assets/images/projects/stockPredictorCompareChart.webp",
      "/assets/images/projects/stockPredictorLineChart.webp",
    ],
    description:
      "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
    sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
  },
];
