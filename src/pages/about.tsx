import { NextSeo } from "next-seo";
import { AnimatePresence } from "framer-motion";

import PageTransitionAnimation from "@/components/page-transition-animation";
import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import GetInTouch from "@/components/get-in-touch/get-in-touch";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { metadata } from "@/data/metadata.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title={`About ${metadata.name} | ${metadata.jobTitle}`}
        description={`Learn more about ${metadata.name}, a dedicated ${metadata.jobTitle} with over 10 years of experience. Discover the journey, skills, and passion that drive me to create innovative and user-friendly web solutions.`}
        canonical={`${metadata.portfolioUrl}/about`}
        openGraph={{
          url: `${metadata.portfolioUrl}/about`,
          title: `Learn About ${metadata.name} | ${metadata.jobTitle}`,
          description: `Dive into the story of ${metadata.name}, a dedicated ${metadata.jobTitle}. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional web solutions.`,
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
              "Portfolio, Software Engineer, Full Stack Developer, Frontend Developer, Backend Developer, Web Developer, React.js, Next.js, Vue.js, JavaScript, HTML, CSS, UI/UX, Responsive Design, Frontend Development, Backend Development, Web Development, Professional Journey, Skills, Passion for Web Development",
          },
        ]}
      />
      <AnimatePresence>
        <PageTransitionAnimation key="page-transition" />
        <AboutHero key="about-hero" />
        <ExperienceShowcaseList
          key="experience"
          title="Experience"
          details={EXPERIENCE}
        />
        <ExperienceShowcaseList
          key="education"
          title="Education"
          details={EDUCATION}
        />
        <GetInTouch key="get-in-touch" />
      </AnimatePresence>
    </>
  );
}
