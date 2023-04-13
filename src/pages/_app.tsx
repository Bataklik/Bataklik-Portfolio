import "./../../styles/globals.css";
import { Montserrat } from "@next/font/google";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </AnimatePresence>
  );
}
