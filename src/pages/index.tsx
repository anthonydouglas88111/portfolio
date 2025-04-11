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
        title={`${metadata.name} | ${metadata.jobTitle}`}
        description={`Explore the professional portfolio of ${metadata.name}, a skilled ${metadata.jobTitle} with over 10 years of hands-on experience. Discover innovative projects, expertise in modern web technologies, and a passion for creating seamless user experiences.`}
        canonical={metadata.portfolioUrl}
        openGraph={{
          url: metadata.portfolioUrl,
          title: `${metadata.name} | ${metadata.jobTitle}`,
          description: `Dive into the world of web development with ${metadata.name}. Discover a ${metadata.jobTitle} with over 10 years of expertise, showcasing cutting-edge projects and a commitment to crafting exceptional user interfaces.`,
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
              "Portfolio, Software Engineer, Full Stack Developer, Frontend Developer, Backend Developer, Web Developer, React.js, Next.js, Vue.js, JavaScript, HTML, CSS, UI/UX, Responsive Design, Frontend Development, Backend Development, Web Development",
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
