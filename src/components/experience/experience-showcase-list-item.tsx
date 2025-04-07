"use client";

import { type RefObject, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin, ExternalLink } from "lucide-react";

export interface ExperienceListIconProps {
  iconRef: RefObject<HTMLElement>;
  index: number;
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
          className="fill-zinc-100 stroke-[5px] dark:fill-zinc-900"
          stroke="url(#gradientStroke)"
        />

        <motion.circle
          cx="50"
          cy="27"
          r="10"
          className="fill-accent"
          initial={{ scale: 0.8, opacity: 0.8 }}
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: props.index * 0.2,
          }}
        />

        <defs>
          <linearGradient
            id="gradientStroke"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="var(--accent-color)" />
            <stop offset="100%" stopColor="var(--accent-color-light)" />
          </linearGradient>
        </defs>
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
  index?: number;
}

export default function ExperienceShowcaseListItem(
  props: ExperienceShowcaseListItemProps,
) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const index = props.index || 0;

  // Animation variants
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <li ref={ref} className="mx-auto mb-16 flex w-[60%] flex-col gap-1">
      <ShowCaseLiIcon iconRef={ref} index={index} />

      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        custom={index}
        whileHover={{
          y: -10,
          x: 5,
          scale: 1.03,
          rotateZ: 1,
          boxShadow:
            "0 20px 40px -20px rgba(var(--accent-rgb), 0.4), 0 0 20px rgba(var(--accent-rgb), 0.2)",
          transition: { type: "spring", stiffness: 300, damping: 15 },
        }}
        className="relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all dark:bg-zinc-800/80 dark:shadow-zinc-900/30"
        style={{
          boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <motion.div
          className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-accent/5"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-accent/5"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />

        <div className="relative z-10">
          <motion.h3
            className="text-base font-bold text-zinc-900 dark:text-white sm:text-xl md:text-2xl"
            whileHover={{ color: "var(--accent-color)" }}
            transition={{ duration: 0.2 }}
          >
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
                animate={{ x: isHovered ? 5 : 0, y: isHovered ? -5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="h-4 w-4" />
              </motion.span>
            </Link>
          </motion.h3>

          <div className="mt-3 flex flex-wrap items-center gap-4">
            <motion.div
              className="flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1.5"
              whileHover={{
                backgroundColor: "rgba(var(--accent-rgb), 0.2)",
                scale: 1.05,
              }}
            >
              <Calendar className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-medium text-accent">
                {props.date}
              </span>
            </motion.div>
            <motion.div
              className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="h-3.5 w-3.5" />
              <span>{props.location}</span>
            </motion.div>
          </div>

          <p className="mt-4 text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 xs:text-base">
            {props.description}
          </p>

          <motion.div
            className="mt-4 text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                x: 5,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href={props.organisation.href}
                className="inline-flex items-center gap-1 text-xs font-medium text-accent transition-all hover:text-accent/80"
                target="_blank"
                rel="nofollow"
              >
                View more <ExternalLink className="h-3 w-3" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </li>
  );
}
