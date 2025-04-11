import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";

export interface ThemeSwitchProps {
  setClose?: Dispatch<SetStateAction<boolean>>;
}

export default function ThemeSwitch(props: ThemeSwitchProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const handleThemeChange = () => {
    if (props.setClose) {
      props.setClose(false);
    }
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      aria-label="toggle theme"
      className="mt-8 h-10 w-10 rounded-full text-accent transition-[scale] duration-200 hover:scale-[1.1] md:mr-4 md:mt-0 md:h-6 md:w-6"
      onClick={handleThemeChange}
    >
      {mounted &&
        (theme === "dark" || resolvedTheme === "dark" ? (
          <SunIcon className="h-6 w-6" />
        ) : (
          <MoonIcon className="h-6 w-6" />
        ))}
    </button>
  );
}
