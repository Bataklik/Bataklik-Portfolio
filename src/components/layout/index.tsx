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
      id: 1,
      name: "Home",
      path: "#home",
    },
    {
      id: 2,
      name: "About me",
      path: "#about",
    },
    {
      id: 3,
      name: "Projects",
      path: "#projects",
    },
    {
      id: 4,
      name: "Contact me",
      path: "#contact",
    },
  ];

  return (
    <div>
      <Head
        title={"Bataklik Portfolio:"}
        section={navLinks[selectedItem].name}
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
