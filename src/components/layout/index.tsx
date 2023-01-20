import React from "react";
import { Footer } from "./Footer";
import { Head } from "./Head";
import { Nav } from "./Nav";

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head />
      <div>
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
