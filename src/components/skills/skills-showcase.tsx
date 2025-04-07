import { AnimatePresence, motion } from "framer-motion";

import SkillPill, {
  type SkillPillProps,
} from "@/components/skills/skills-pill";
import FadeRight from "@/animation/fade-right";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { useDebounceValue } from "@/hooks/useDebounceValue";

export interface SkillsShowcaseProps {
  skills: {
    sectionName: string;
    skills: SkillPillProps[];
  }[];
}

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  const isMobile = useScreenBreakpoint(640);
  const isMobileDebonced = useDebounceValue(isMobile, 600);
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
            Skills & Expertise
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
            A comprehensive overview of my technical skills and expertise
          </p>
        </motion.div>

        <div className="mt-16">
          {skills.map((section) => (
            <AnimatePresence key={section.sectionName}>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-accent sm:text-xl">
                  {section.sectionName}
                </h3>
                <div className="mt-2 flex flex-wrap gap-4 text-xl text-accent-foreground">
                  {section.skills.map((pill, index) => (
                    <FadeRight
                      key={`lang-${index}`}
                      duration={0.4}
                      delay={0.1 + index * 0.1}
                      whileInView={!isMobileDebonced}
                      className="-z-20"
                    >
                      <SkillPill {...pill} />
                    </FadeRight>
                  ))}
                </div>
              </div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </section>
  );
}
