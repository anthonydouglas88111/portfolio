import { RefObject, useRef, useState } from "react";
import Link from "next/link";

import { motion, useScroll } from "framer-motion";

import { ArrowTopRight } from "@/components/icons";

export interface ExperienceListIconProps {
  iconRef: RefObject<HTMLElement>;
}

function ShowCaseLiIcon(props: ExperienceListIconProps) {
  const { scrollYProgress } = useScroll({
    target: props.iconRef,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });
  return (
    <figure className="absolute left-0 stroke-zinc-900">
      <svg width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="27"
          r="20"
          className="fill-none stroke-accent stroke-1"
        />
        <motion.circle
          style={{
            pathLength: scrollYProgress,
          }}
          cx="50"
          cy="27"
          r="20"
          className="fill-zinc-100 stroke-[5px] dark:fill-zinc-900 dark:stroke-zinc-100"
        />
        <circle cx="50" cy="27" r="10" className="fill-accent stroke-1" />
      </svg>
    </figure>
  );
}

export interface ExperienceShowcaseListItemProps {
  title: string;
  organisation: {
    name: string;
    href: string;
  };
  date: string;
  location: string;
  description: string;
}

export default function ExperienceShowcaseListItem(
  props: ExperienceShowcaseListItemProps,
) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li ref={ref} className="mx-auto mb-14 flex w-[60%] flex-col gap-1">
      <ShowCaseLiIcon iconRef={ref} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 0.5,
        }}
        className="relative rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-zinc-800/50 dark:shadow-zinc-900/20"
      >
        <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-accent"></div>
        <h3 className="text-base font-bold text-zinc-900 dark:text-white sm:text-xl md:text-2xl">
          {props.title}{" "}
          <Link
            href={props.organisation.href}
            className="group inline-flex items-center gap-1 text-accent transition-all hover:text-accent/80"
            target="_blank"
            rel="nofollow"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            @{props.organisation.name}
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowTopRight className="h-3 w-3" />
            </motion.span>
          </Link>
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {props.date}
          </span>
          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {props.location}
          </span>
        </div>
        <p className="mt-4 text-sm font-medium text-zinc-700 dark:text-zinc-300 xs:text-base">
          {props.description}
        </p>
      </motion.div>
    </li>
  );
}
