import React from "react";
import { Footer } from "./Footer";
import { Head } from "./Head";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head />
      <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
