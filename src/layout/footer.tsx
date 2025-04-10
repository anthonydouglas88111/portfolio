import { motion } from "framer-motion";

import ScrollUpButton from "@/components/scroll-up-button";
import { metadata } from "@/data/metadata.mjs";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-transparent via-accent/5 to-accent/10 px-6 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 border-t border-zinc-200/50 py-8 dark:border-zinc-800/50 sm:flex-row sm:gap-8 sm:py-10"
        >
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <span className="text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
              © {currentYear}{" "}
              <span className="font-bold text-accent">{metadata.name}</span>.{" "}
            </span>
            <span className="text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
              All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
              Designed & Built with <span className="text-accent">❤️</span> by{" "}
              <span className="font-bold text-accent">{metadata.name}</span>
            </span>
          </div>
        </motion.div>
      </div>

      <ScrollUpButton />
    </footer>
  );
}
