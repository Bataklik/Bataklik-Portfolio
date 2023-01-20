import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import CustomTheme from "./../components/theme";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
