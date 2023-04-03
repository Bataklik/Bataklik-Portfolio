import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Head from "./Head";

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}
export function Layout({ children }: LayoutProps) {
  const [selectedItem, setSelectedItem] = useState(0);
  const navLinks = [
    {
      linkName: "Home",
      linkPath: "#home",
    },
    {
      linkName: "About me",
      linkPath: "#about",
    },
    {
      linkName: "Projects",
      linkPath: "#projects",
    },
    {
      linkName: "Contact me",
      linkPath: "#contact",
    },
  ];

  return (
    <div>
      <Head
        title={"Bataklik Portfolio:"}
        section={navLinks[selectedItem].linkName}
      />
      <Navbar
        navLinks={navLinks}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      {children}
      <Footer />
    </div>
  );
}
