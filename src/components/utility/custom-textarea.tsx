import { InputHTMLAttributes, forwardRef } from "react";

import { classNames } from "@/utility/classNames";

export interface TextareaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {}

const CustomTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={4}
        {...props}
        className={classNames(
          "w-full rounded-lg border-none bg-background p-2 font-semibold text-accent placeholder:font-normal placeholder:text-zinc-400 focus-within:border-2 focus-within:border-accent focus-within:ring-accent lg:p-4",
          className,
        )}
      />
    );
  },
);

CustomTextarea.displayName = "CustomTextarea";

export default CustomTextarea;
