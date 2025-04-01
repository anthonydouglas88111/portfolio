import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CssSvg from "@/public/icons/css.svg";
import SassSvg from "@/public/icons/sass.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import NextjsSvg from "@/public/icons/nextjs.svg";
import VuejsSvg from "@/public/icons/vuejs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";
import AntdSvg from "@/public/icons/antd.svg";
import BootstrapSvg from "@/public/icons/bootstrap.svg";
import ViteSvg from "@/public/icons/vite.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";
import ExpressSvg from "@/public/icons/express.svg";
import SocketioSvg from "@/public/icons/socketio.svg";
import DjangoSvg from "@/public/icons/django.svg";
import FlaskSvg from "@/public/icons/flask.svg";
import FastapiSvg from "@/public/icons/fastapi.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import MysqlSvg from "@/public/icons/mysql.svg";
import PostgresqlSvg from "@/public/icons/postgresql.svg";
import PrismaSvg from "@/public/icons/prisma.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";
import PostmanSvg from "@/public/icons/postman.svg";

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
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
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
