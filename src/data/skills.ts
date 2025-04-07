import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/assets/icons/html.svg";
import CssSvg from "@/public/assets/icons/css.svg";
import SassSvg from "@/public/assets/icons/sass.svg";
import JavascriptSvg from "@/public/assets/icons/javascript.svg";
import TypescriptSvg from "@/public/assets/icons/typescript.svg";
import PythonSvg from "@/public/assets/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/assets/icons/reactjs.svg";
import NextjsSvg from "@/public/assets/icons/nextjs.svg";
import VuejsSvg from "@/public/assets/icons/vuejs.svg";
import ReduxSvg from "@/public/assets/icons/redux.svg";
import TailwindcssSvg from "@/public/assets/icons/tailwindcss.svg";
import MuiSvg from "@/public/assets/icons/mui.svg";
import AntdSvg from "@/public/assets/icons/antd.svg";
import BootstrapSvg from "@/public/assets/icons/bootstrap.svg";
import ViteSvg from "@/public/assets/icons/vite.svg";

// Backend
import NodejsSvg from "@/public/assets/icons/nodejs.svg";
import ExpressSvg from "@/public/assets/icons/express.svg";
import SocketioSvg from "@/public/assets/icons/socketio.svg";
import DjangoSvg from "@/public/assets/icons/django.svg";
import FlaskSvg from "@/public/assets/icons/flask.svg";
import FastapiSvg from "@/public/assets/icons/fastapi.svg";

// Database and ORMS
import MongoDBSvg from "@/public/assets/icons/mongodb.svg";
import MysqlSvg from "@/public/assets/icons/mysql.svg";
import PostgresqlSvg from "@/public/assets/icons/postgresql.svg";
import PrismaSvg from "@/public/assets/icons/prisma.svg";

// Tools and Tech
import GitSvg from "@/public/assets/icons/git.svg";
import DockerSvg from "@/public/assets/icons/docker.svg";
import AwsSvg from "@/public/assets/icons/aws.svg";
import PostmanSvg from "@/public/assets/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CssSvg,
      },
      {
        name: "SASS",
        icon: SassSvg,
      },
      {
        name: "JavaScript",
        icon: JavascriptSvg,
      },
      {
        name: "TypeScript",
        icon: TypescriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "React.js",
        icon: ReactjsSvg,
      },
      {
        name: "Next.js",
        icon: NextjsSvg,
      },
      {
        name: "Vue.js",
        icon: VuejsSvg,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindcssSvg,
      },
      {
        name: "MUI",
        icon: MuiSvg,
      },
      {
        name: "AntD",
        icon: AntdSvg,
      },
      {
        name: "Bootstrap",
        icon: BootstrapSvg,
      },
      {
        name: "Framer motion",
        icon: FramerMotionIcon,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
      {
        name: "Vite PWA",
        icon: VitePwaIcon,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: ExpressSvg,
      },
      {
        name: "Socket.io",
        icon: SocketioSvg,
      },
      {
        name: "Django",
        icon: DjangoSvg,
      },
      {
        name: "Flask",
        icon: FlaskSvg,
      },
      {
        name: "FastAPI",
        icon: FastapiSvg,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "MySQL",
        icon: MysqlSvg,
      },
      {
        name: "Postgress",
        icon: PostgresqlSvg,
      },
      {
        name: "Prisma",
        icon: PrismaSvg,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
];
