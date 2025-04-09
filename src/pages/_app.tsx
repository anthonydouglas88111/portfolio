import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainLayout from "@/layout/main-layout";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import "@/styles/globals.css";
import "@/styles/carousel.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light">
        <MainLayout>
          <AnimatePresence initial={false}>
            <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </MainLayout>
      </ThemeProvider>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
