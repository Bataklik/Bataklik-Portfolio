import "../../styles/globals.css";
import { Montserrat } from "@next/font/google";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </AnimatePresence>
  );
}
