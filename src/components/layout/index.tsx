import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Head from "./Head";
import {
  IoHomeOutline,
  IoHelpCircleOutline,
  IoFolderOutline,
  IoMailUnreadOutline,
} from "react-icons/io5";

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}
export function Layout({ children }: LayoutProps) {
  const [selectedItem, setSelectedItem] = useState(0);
  const navLinks = [
    {
      id: 1,
      icon: <IoHomeOutline />,
      name: "Home",
      path: "#home",
    },
    {
      id: 2,
      icon: <IoHelpCircleOutline />,
      name: "About me",
      path: "#about",
    },
    {
      id: 3,
      icon: <IoFolderOutline />,
      name: "Projects",
      path: "#projects",
    },
    {
      id: 4,
      icon: <IoMailUnreadOutline />,
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
