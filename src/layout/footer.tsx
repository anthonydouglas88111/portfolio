import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { MailIcon, GithubIcon } from "@/components/icons";
import ContactForm, {
  type ContactFormValues,
} from "@/components/contact-form/contact-form";
import ContactMailToast, {
  type MailSentToastState,
} from "@/components/contact-form/contact-mail-toast";
import ScrollUpButton from "@/components/scroll-up-button";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isSendingMail, setIsSendingMail] = useState(false);
  const [toastState, setToastState] = useState<MailSentToastState>({
    type: null,
    value: false,
    message: "",
  });

  const handleSubmit = async (values: ContactFormValues) => {
    setIsSendingMail(true);
    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setToastState({
          type: "success",
          value: true,
          message: "Successfully sent email",
        });
      } else {
        setToastState({
          type: response.status === 429 ? "warning" : "failure",
          value: true,
          message:
            response.status === 429
              ? "Rate Limiter: Only 5 email per hour"
              : "Oop! Unable to send email",
        });
      }
    } catch {
      setToastState({
        type: "failure",
        value: true,
        message: "Oop! Unable to send email",
      });
    }
    setIsSendingMail(false);
  };

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-transparent via-accent/5 to-accent/10 px-6 py-16 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <div className="hover:shadow-3xl mb-16 grid grid-cols-1 gap-12 rounded-3xl bg-gradient-to-br from-accent via-accent/90 to-accent/80 px-4 py-8 text-white shadow-2xl backdrop-blur-sm transition-all duration-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700/50 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              Get In Touch
            </h2>
            <p className="text-base leading-relaxed text-white/90 sm:text-lg">
              I'm currently looking for new opportunities to collaborate on
              interesting projects. Whether you have a question or just want to
              say hi, I'll try my best to get back to you!
            </p>

            <div className="flex flex-row gap-4 pt-4">
              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center"
              >
                <Link
                  href={`mailto:${siteMetadata.email}`}
                  className="transition-all duration-300 hover:text-accent"
                >
                  <div className="rounded-full bg-white/80 p-3 transition-all duration-300 group-hover:bg-white/90 group-hover:shadow-lg sm:p-4">
                    <MailIcon className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
                  </div>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center"
              >
                <Link
                  href={siteMetadata.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:text-accent"
                >
                  <div className="rounded-full bg-white/80 p-3 transition-all duration-300 group-hover:bg-white/90 group-hover:shadow-lg sm:p-4">
                    <GithubIcon className="h-5 w-5 text-accent sm:h-5 sm:w-5" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <ContactForm
            isSubmitting={isSendingMail}
            handleSubmit={handleSubmit}
          />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-800 sm:mt-16 sm:flex-row sm:gap-6 sm:pt-8">
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <span className="text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
              © {currentYear}{" "}
              <span className="font-bold">{siteMetadata.author}</span>.{" "}
            </span>
            <span className="text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
              All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
              Designed & Built with ❤️ by Anthony Douglas
            </span>
          </div>
        </div>
      </div>

      <ScrollUpButton />
      <ContactMailToast toastState={toastState} showToast={setToastState} />
    </footer>
  );
}
