import { useState } from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import PageTransitionAnimation from "@/components/page-transition-animation";
import ProjectCard from "@/components/projects/project-card";
import GetInTouch from "@/components/get-in-touch/get-in-touch";
import { PROJECT_DATA } from "@/data/projects";
import { metadata } from "@/data/metadata.mjs";

export default function Projects() {
  const categories = ["all", "web", "mobile"];
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECT_DATA
      : PROJECT_DATA.filter((project) => project.category === selectedCategory);

  return (
    <>
      <NextSeo
        title={`Projects by ${metadata.name} | ${metadata.jobTitle}`}
        description={`Explore a collection of projects by ${metadata.name}, a seasoned ${metadata.jobTitle}. From innovative web applications to responsive interfaces, discover the depth and diversity of my work.`}
        canonical={`${metadata.portfolioUrl}/projects`}
        openGraph={{
          url: `${metadata.portfolioUrl}/projects`,
          title: `Discover Projects by ${metadata.name} | ${metadata.jobTitle}`,
          description: `Explore a showcase of projects crafted by ${metadata.name}, a ${metadata.jobTitle}. Witness the fusion of creativity and technology in web development.`,
          images: [
            {
              url: `${metadata.portfolioUrl}${metadata.portfolioImage}`,
              alt: `${metadata.name} - Portfolio Image`,
            },
          ],
          siteName: metadata.portfolioName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Projects, Portfolio, Software Engineer, Full Stack Developer, Frontend Developer, Backend Developer, Web Developer, React.js, Next.js, Vue.js, JavaScript, HTML, CSS, UI/UX, Responsive Design, Frontend Development, Backend Development, Web Development",
          },
        ]}
      />
      <AnimatePresence>
        <PageTransitionAnimation key="page-transition" />
        <section className="mx-auto w-full px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Projects
              </h1>
              <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                Here are some of the projects I&apos;d like to share
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-accent text-white"
                      : "bg-accent/10 text-accent hover:bg-accent/20"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto mt-20 max-w-3xl rounded-2xl bg-accent/5 p-8 text-center sm:p-12"
            >
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Interested in seeing more of my work?
              </h2>
              <p className="mt-6 text-base text-muted-foreground sm:text-lg">
                Visit my{" "}
                <Link
                  href={`${metadata.github}?tab=repositories`}
                  target="_blank"
                  className="font-semibold text-accent underline underline-offset-4 transition-colors hover:text-accent/70"
                >
                  Github
                </Link>{" "}
                to explore more projects and see what I&apos;m currently working
                on.
              </p>
            </motion.div>
          </div>
        </section>
        <GetInTouch key="get-in-touch" />
      </AnimatePresence>
    </>
  );
}
