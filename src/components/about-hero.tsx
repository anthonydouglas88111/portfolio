import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import { metadata } from "@/data/metadata.mjs";
import profileImg from "@/public/assets/images/profile.png";
import DuotoneImage from "./duotone-image";

export default function AboutHero() {
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 text-left sm:px-14 md:px-20 md:py-24 lg:flex-row lg:gap-14 lg:py-32">
      <div className="absolute right-12 top-12 -z-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-4 gap-2"
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.1,
              }}
              className="h-1.5 w-1.5 rounded-full bg-accent/60"
            />
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-12 -z-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-4 gap-2"
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.1,
              }}
              className="h-1.5 w-1.5 rounded-full bg-accent/60"
            />
          ))}
        </motion.div>
      </div>

      <FadeRight
        key="hero-image"
        duration={0.6}
        className="w-full sm:w-2/3 md:w-2/3 lg:w-1/2"
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-accent to-accent/50 opacity-75 blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <DuotoneImage
              src={profileImg}
              width={100}
              height={100}
              className="h-auto w-full rounded-2xl shadow-2xl"
              alt="Profile photo"
              lightColor="#E0FFFF"
              darkColor="#004D4D"
              unoptimized
            />

            <motion.div
              initial={{ x: "-100%", opacity: 0.5 }}
              animate={{ x: "200%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 5,
              }}
              className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -bottom-10 -right-10 rounded-full bg-background p-2 shadow-lg sm:-bottom-12 sm:-right-12 sm:p-3"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 sm:h-24 sm:w-24"
            >
              <span className="text-xs font-bold text-accent sm:text-sm">
                FULL STACK
              </span>
            </motion.div>
          </motion.div>
        </div>
      </FadeRight>

      <div className="mt-16 w-full lg:mt-0 lg:w-1/2">
        <FadeUp key="hero-content" duration={0.6}>
          <div className="relative">
            <h1 className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text py-1.5 text-3xl font-bold text-transparent sm:text-4xl md:text-4xl lg:text-3xl xl:text-5xl">
              {metadata.name}
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "40%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-2 h-1 bg-gradient-to-r from-accent to-transparent"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-md mt-4 font-medium leading-relaxed text-zinc-900 dark:text-zinc-300 sm:text-lg lg:mt-8"
          >
            I turn vision into reality with code. Whether I&apos;m working on a
            website or any digital product, I bring my commitment to design
            excellence and user-centered thinking to every project I work on.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-md mt-4 font-medium leading-relaxed text-zinc-900 dark:text-zinc-300 sm:text-lg lg:mt-8"
          >
            Explore my latest{" "}
            <Link href="/projects" className="group relative inline-block">
              <span className="relative z-10 font-semibold text-accent">
                projects
              </span>
              <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transform bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </Link>{" "}
            showcasing my expertise in React.js, Next.js, Vue.js, Javascript and
            web development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {["React.js", "Next.js", "Vue.js", "Javascript", "HTML", "CSS"].map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
                >
                  {skill}
                </motion.span>
              ),
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-accent/10 shadow-inner">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <Image
                  className="h-8 w-8"
                  alt={metadata.country}
                  src={`https://flagcdn.com/${metadata.countryCode}.svg`}
                  width={32}
                  height={32}
                />
              </motion.div>
            </div>
            <span className="text-lg font-medium text-foreground">
              {metadata.city}, {metadata.provinceCode}, {metadata.country}
            </span>
          </motion.div>
        </FadeUp>
      </div>
    </div>
  );
}
