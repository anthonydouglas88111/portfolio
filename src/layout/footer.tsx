import Link from "next/link";
import ContactButton from "@/components/contact-form/contact-button";
import ScrollUpButton from "@/components/scroll-up-button";
import { MailIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-transparent to-accent/5 px-6 py-16 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        {/* Contact Section */}
        <div className="mb-16 flex flex-col items-center gap-8 rounded-3xl bg-gradient-to-br from-accent to-accent/80 p-8 text-white shadow-xl sm:p-12 md:gap-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium uppercase tracking-wider text-white backdrop-blur-sm md:text-base">
              Let&apos;s work together
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
              I&apos;m always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8"
          >
            <Link
              href={`mailto:${siteMetadata.email}`}
              className="group flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            >
              <MailIcon className="h-5 w-5" />
              <span>{siteMetadata.email}</span>
            </Link>
            <ContactButton />
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-zinc-200 pt-8 dark:border-zinc-800 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-base text-zinc-600 dark:text-zinc-400">
              © {currentYear} {siteMetadata.author}. All rights reserved.
            </span>
          </div>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-zinc-600 transition-colors hover:text-accent dark:text-zinc-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-zinc-600 transition-colors hover:text-accent dark:text-zinc-400"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-zinc-600 transition-colors hover:text-accent dark:text-zinc-400"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      <ScrollUpButton />
    </footer>
  );
}
