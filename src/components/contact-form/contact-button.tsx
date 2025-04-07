import { useRef, useState } from "react";

import { MailIcon } from "lucide-react";

import ContactFormModal from "@/components/contact-form/contact-form-modal";

export default function ContactButton() {
  const refSendBtn = useRef<HTMLButtonElement>(null);

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <button
        ref={refSendBtn}
        className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-2 text-accent transition-transform duration-150 focus-within:scale-[1.05] hover:scale-[1.05] hover:bg-foreground hover:text-background"
        onClick={() => setIsOpenModal(true)}
      >
        <MailIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-9 lg:w-9" />
        <span className="text-base font-semibold sm:text-lg lg:text-xl">
          Send Message
        </span>
      </button>

      <ContactFormModal showModal={isOpenModal} setShowModal={setIsOpenModal} />
    </>
  );
}
