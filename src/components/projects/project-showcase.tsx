import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowTopRight, GithubIcon } from "@/components/icons";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import Slider from "react-slick";

const generateImageData = (proj: ProjectShowcaseListItem[]) => {
  return proj.map((p) => p.image);
};

interface ProjectShowcaseProps {
  projects: ProjectShowcaseListItem[];
}

export default function ProjectShowcase(props: ProjectShowcaseProps) {
  const images = useMemo(() => {
    return generateImageData(props.projects);
  }, [props.projects]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280, // lg
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
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

        <div className="mt-8 lg:mt-12">
          <Slider {...sliderSettings} className="project-carousel">
            {props.projects.map((project, index) => (
              <div key={project.title} className="h-full px-4">
                <div className="relative h-full overflow-hidden rounded-2xl bg-white/5  shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900/50">
                  <div className="flex h-full flex-col gap-4">
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                      <Image
                        src={images[index].LIGHT}
                        alt={project.title}
                        fill
                        className="object-cover dark:hidden"
                        priority={index === 0}
                      />
                      {images[index].DARK && (
                        <Image
                          src={images[index].DARK}
                          alt={project.title}
                          fill
                          className="hidden object-cover dark:block"
                          priority={index === 0}
                        />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col gap-4 p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-accent sm:text-3xl">
                          {index + 1}.
                        </span>
                        <h3 className="text-2xl font-bold text-accent transition-colors duration-300 sm:text-3xl">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto flex items-center justify-end gap-4">
                        {project.sourceCodeHref && (
                          <a
                            href={project.sourceCodeHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 text-accent hover:text-accent/80"
                          >
                            <span>Source Code</span>
                            <GithubIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                          </a>
                        )}
                        <Link
                          href={project.liveWebsiteHref}
                          target="_blank"
                          className="group inline-flex items-center gap-2 text-accent hover:text-accent/80"
                        >
                          <span>Live</span>
                          <ArrowTopRight className="h-4 w-4 rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <ArrowTopRight className="h-5 w-5 rotate-45 transition-transform duration-300 group-hover:rotate-0" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
