import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { ArrowRightIcon, ExternalLinkIcon } from "lucide-react";

import { GithubIcon } from "@/components/icons";

export interface ProjectShowcaseListItemProps {
  id: string;
  title: string;
  skills: string[];
  image: {
    LIGHT: string;
    DARK?: string;
  };
  sourceCodeHref?: string;
  liveWebsiteHref?: string;
}

interface ProjectShowcaseProps {
  projects: ProjectShowcaseListItemProps[];
}

export default function ProjectShowcase(props: ProjectShowcaseProps) {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="relative overflow-hidden px-6 py-16 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text p-2 text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="mt-8 lg:mt-12">
          <Slider {...sliderSettings} className="project-carousel">
            {props.projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full bg-background"
              >
                <div className="relative grid h-full grid-rows-[auto_1fr] overflow-hidden rounded-lg bg-white/5 shadow-lg transition-all dark:bg-zinc-900/50">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={project.image.LIGHT!}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover dark:hidden"
                      priority={index === 0}
                    />
                    {project.image.DARK && (
                      <Image
                        src={project.image.DARK!}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="hidden object-cover dark:block"
                        priority={index === 0}
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-4 p-4">
                    <h3 className="line-clamp-2 text-2xl font-bold text-accent transition-colors duration-300 sm:text-3xl">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-end gap-4">
                      {project.sourceCodeHref && (
                        <Link
                          href={project.sourceCodeHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 text-accent hover:text-accent/80"
                        >
                          <span>Source Code</span>
                          <GithubIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                        </Link>
                      )}
                      {project.liveWebsiteHref && (
                        <Link
                          href={project.liveWebsiteHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 text-accent hover:text-accent/80"
                        >
                          <span>Live</span>
                          <ExternalLinkIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-4 rounded-full bg-accent/10 px-6 py-3 text-base font-semibold text-accent transition-all hover:bg-accent hover:text-white sm:text-lg md:text-xl"
          >
            <span>View All Projects</span>
            <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
