import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowTopRight } from "@/components/icons";
import ProjectShowcaseList, { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

const generateImageData = (proj: ProjectShowcaseListItem[]) => {
  return proj.map((p) => p.image);
};

interface ProjectShowcaseProps {
  projects: ProjectShowcaseListItem[];
}

export default function ProjectShowcase(props: ProjectShowcaseProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = useMemo(() => {
    return generateImageData(props.projects);
  }, [props.projects]);

  const handleAnimate = (index: number) => {
    if (index === currentImage) return;
    setCurrentImage(index);
  };

  return (
    <section className="relative overflow-hidden py-16">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="relative right-0 top-0 hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={props.projects[currentImage].title}
              initial={{ x: "100%", opacity: 0, scale: 0.8 }}
              animate={{
                x: "55%",
                y: "50%",
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{ x: "100%", opacity: 0, scale: 0.8 }}
              transition={{
                type: "spring",
                stiffness: 100,
              }}
              className="absolute right-0 top-0 -z-50"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.div
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src={images[currentImage].LIGHT}
                  unoptimized
                  width={100}
                  height={100}
                  className="h-auto w-1/2 rounded-xl border border-zinc-300 shadow-lg transition-all duration-300 dark:hidden dark:border-accent/50"
                  alt={`project ${currentImage}`}
                />
                {images[currentImage].DARK !== undefined && (
                  <Image
                    src={images[currentImage].DARK!}
                    unoptimized
                    width={100}
                    height={100}
                    className="hidden h-auto w-1/2 rounded-xl border border-zinc-300 shadow-lg transition-all duration-300 dark:inline-block dark:border-accent/20 dark:shadow-lg dark:shadow-emerald-400/5"
                    alt={`project ${currentImage}`}
                  />
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 hidden flex-col gap-6 py-14 sm:gap-8 sm:py-20 md:gap-10 lg:flex">
          {props.projects.map((proj, index) => (
            <ProjectShowcaseList
              activeProject={currentImage}
              toggleList={handleAnimate}
              data={proj}
              key={index}
            />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 py-14 sm:grid-cols-2 sm:gap-8 sm:py-20 md:gap-10 lg:hidden">
          {props.projects.map((proj) => (
            <Link
              key={proj.title}
              href={proj.href}
              className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900/50"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-accent sm:text-3xl">
                    {proj.index + 1}.
                  </span>
                  <h3 className="text-2xl font-bold text-accent transition-colors duration-300 sm:text-3xl">
                    {proj.title}
                  </h3>
                </div>
                <p className="flex flex-wrap gap-2 text-base font-medium text-zinc-600 dark:text-zinc-400">
                  {proj.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent"
                    >
                      #{tag}
                    </span>
                  ))}
                </p>
              </div>
              <div className="absolute bottom-0 right-0 h-1 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-4 rounded-full bg-accent/10 px-6 py-3 text-base font-semibold text-accent transition-all hover:bg-accent hover:text-white sm:text-lg md:text-xl"
          >
            <span>View All Projects</span>
            <ArrowTopRight className="h-5 w-5 rotate-45 transition-transform duration-300 group-hover:rotate-0" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
