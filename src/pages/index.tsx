import { NextSeo } from "next-seo";
import { AnimatePresence } from "framer-motion";

import PageTransitionAnimation from "@/components/page-transition-animation";
import LandingHero from "@/components/landing-hero";
import SkillShowcase from "@/components/skills/skill-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import BlogShowcase from "@/components/blogs/blog-showcase";
import GetInTouch from "@/components/get-in-touch/get-in-touch";
import { SKILL_SHOWCASE } from "@/data/skills";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { BLOG_DATA } from "@/data/blogs";
import { metadata } from "@/data/metadata.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title={`${metadata.name} | Software Engineer`}
        description={`Explore the professional portfolio of ${metadata.name}, a skilled Software Engineer with 2 years of hands-on experience. Discover innovative projects, expertise in modern web technologies, and a passion for creating seamless user experiences.`}
        canonical={metadata.portfolioUrl}
        openGraph={{
          url: metadata.portfolioUrl,
          title: `${metadata.name} | Software Engineer`,
          description: `Dive into the world of web development with ${metadata.name}. Discover a Software Engineer with 2 years of expertise, showcasing cutting-edge projects and a commitment to crafting exceptional user interfaces.`,
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
              "React Developer, Software Engineer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Portfolio, UI/UX, React.js, Frontend Development, Web Development, JavaScript Developer, Responsive Design",
          },
        ]}
      />
      <AnimatePresence>
        <PageTransitionAnimation key="page-transition" />
        <LandingHero key="landing-hero" />
        <SkillShowcase key="skill-showcase" skills={SKILL_SHOWCASE} />
        <ProjectShowcase key="project-showcase" projects={PROJECT_SHOWCASE} />
        <BlogShowcase key="blog-showcase" blogs={BLOG_DATA} />
        <GetInTouch key="get-in-touch" />
      </AnimatePresence>
    </>
  );
}
