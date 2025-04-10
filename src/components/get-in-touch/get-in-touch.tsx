import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FormikProps } from "formik";

import { MailIcon, PhoneIcon, LocationIcon } from "@/components/icons";
import ContactForm, {
  type ContactFormValues,
} from "@/components/contact-form/contact-form";
import ContactMailToast, {
  type MailSentToastState,
} from "@/components/contact-form/contact-mail-toast";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function GetInTouch() {
  const [isSendingMail, setIsSendingMail] = useState(false);
  const [toastState, setToastState] = useState<MailSentToastState>({
    type: null,
    value: false,
    message: "",
  });
  const formRef = useRef<FormikProps<ContactFormValues>>(null);

  const handleSubmit = async (values: ContactFormValues) => {
    setIsSendingMail(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
        {
          from_name: values.name,
          to_name: siteMetadata.author,
          from_email: values.email,
          to_email: siteMetadata.email,
          subject: values.subject,
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string,
      );

      setToastState({
        type: "success",
        value: true,
        message: "Successfully sent email",
      });
      formRef.current?.resetForm();
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
    <section className="relative overflow-hidden px-6 py-16 sm:px-14 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="hover:shadow-3xl mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-12 rounded-3xl bg-gradient-to-br from-accent via-accent/90 to-accent/80 px-8 py-12 text-white shadow-2xl backdrop-blur-sm transition-all duration-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700/50 lg:mt-16 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-16"
      >
        <div className="space-y-8 ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg leading-relaxed text-white/90"
          >
            I&apos;m currently looking for new opportunities to collaborate on
            interesting projects. Whether you have a question or just want to
            say hi, I&apos;ll try my best to get back to you!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4"
            >
              <div className="rounded-full bg-white/90 p-3 backdrop-blur-sm">
                <MailIcon className="h-5 w-5 text-accent/90" />
              </div>
              <Link
                href={`mailto:${siteMetadata.email}`}
                className="text-lg text-white/90 transition-colors hover:text-white"
              >
                {siteMetadata.email}
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4"
            >
              <div className="rounded-full bg-white/90 p-3 backdrop-blur-sm">
                <PhoneIcon className="h-5 w-5 text-accent/90" />
              </div>
              <Link
                href={`tel:${siteMetadata.phone.replace(/\D/g, "")}`}
                className="text-lg text-white/90 transition-colors hover:text-white"
              >
                {siteMetadata.phone}
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4"
            >
              <div className="rounded-full bg-white/90 p-3 backdrop-blur-sm">
                <LocationIcon className="h-5 w-5 text-accent/90" />
              </div>
              <span className="text-lg text-white/90">
                {siteMetadata.city}, {siteMetadata.country}
              </span>
            </motion.div>
          </motion.div>
        </div>

        <ContactForm
          isSubmitting={isSendingMail}
          handleSubmit={handleSubmit}
          formRef={formRef}
        />
        <ContactMailToast toastState={toastState} showToast={setToastState} />
      </motion.div>
    </section>
  );
}
