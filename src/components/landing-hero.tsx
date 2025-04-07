import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import { FiDownload, FiGithub } from "react-icons/fi";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none relative flex h-[calc(100vh-10rem)] items-center overflow-hidden"
    >
      <div className="relative w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <div className="space-y-4">
                <h1 className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                  {siteMetadata.author}
                </h1>
              </div>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                {siteMetadata.description} specializing in building
                high-performance, user-focused web applications. Skilled in{" "}
                <span className="relative">
                  <span className="relative z-10 font-semibold text-accent">
                    React.js
                  </span>
                  <span className="absolute bottom-0 left-0 h-2 w-full -rotate-1 bg-accent/20" />
                </span>
                ,{" "}
                <span className="relative">
                  <span className="relative z-10 font-semibold text-accent">
                    Next.js
                  </span>
                  <span className="absolute bottom-0 left-0 h-2 w-full -rotate-1 bg-accent/20" />
                </span>
                ,{" "}
                <span className="relative">
                  <span className="relative z-10 font-semibold text-accent">
                    Vue.js
                  </span>
                  <span className="absolute bottom-0 left-0 h-2 w-full -rotate-1 bg-accent/20" />
                </span>
                , and an expert in{" "}
                <span className="relative">
                  <span className="relative z-10 font-semibold text-accent">
                    JavaScript
                  </span>
                  <span className="absolute bottom-0 left-0 h-2 w-full -rotate-1 bg-accent/20" />
                </span>
                ,{" "}
                <span className="relative">
                  <span className="relative z-10 font-semibold text-accent">
                    HTML
                  </span>
                  <span className="absolute bottom-0 left-0 h-2 w-full -rotate-1 bg-accent/20" />
                </span>
                and{" "}
                <span className="relative">
                  <span className="relative z-10 font-semibold text-accent">
                    CSS
                  </span>
                  <span className="absolute bottom-0 left-0 h-2 w-full -rotate-1 bg-accent/20" />
                </span>
              </div>
            </FadeUp>
            <FadeUp key="cta-buttons" duration={0.6} delay={0.4}>
              <div className="pointer-events-auto mt-8 flex flex-wrap gap-4">
                <Link
                  href="/assets/resume.pdf"
                  target="_blank"
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white transition-all hover:scale-105 hover:bg-accent/90"
                >
                  <FiDownload className="h-5 w-5" />
                  Download Resume
                </Link>
                <Link
                  href={siteMetadata.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-accent/20 bg-white/5 px-6 py-3 text-base font-semibold text-accent transition-all hover:scale-105 hover:bg-accent/10 dark:border-accent/20 dark:bg-zinc-900/50"
                >
                  <FiGithub className="h-5 w-5" />
                  GitHub
                </Link>
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
