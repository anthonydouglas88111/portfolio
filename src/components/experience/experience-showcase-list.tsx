"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Sparkles } from "lucide-react";

import ExperienceShowcaseListItem, {
  type ExperienceShowcaseListItemProps,
} from "@/components/experience/experience-showcase-list-item";

export interface ExperienceShowcaseListProps {
  title: string;
  details: ExperienceShowcaseListItemProps[];
}

export default function ExperienceShowcaseList(
  props: ExperienceShowcaseListProps,
) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-14 md:px-20">
      <div className="absolute -left-10 -top-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <h2 className="relative z-10 bg-gradient-to-r from-accent/80 to-accent bg-clip-text text-center text-4xl font-bold text-transparent xs:text-5xl sm:text-6xl md:text-7xl">
            {props.title}
          </h2>
          <motion.div
            className="absolute -bottom-3 left-1/2 h-3 w-24 -translate-x-1/2 rounded-full bg-accent/20 sm:w-32 md:w-40"
            initial={{ width: 0 }}
            whileInView={{ width: "40%" }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-4 flex items-center justify-center gap-2 text-zinc-600 dark:text-zinc-400"
        >
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium">
            Scroll to explore my journey
          </span>
          <Sparkles className="h-4 w-4 text-accent" />
        </motion.div>
      </div>

      <div ref={ref} className="relative w-full md:mx-auto md:w-[80%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-5 h-full w-[5px] origin-top rounded-full bg-gradient-to-b from-accent via-accent/80 to-accent/40 shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)]"
        />

        <ul className="ml-4 w-full items-center">
          {props.details.map((_details, index) => (
            <ExperienceShowcaseListItem
              key={index}
              {..._details}
              index={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
