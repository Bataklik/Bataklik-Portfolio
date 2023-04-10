import React, { useState } from "react";
import { Footer } from "@components/layout/footer";
import { Head } from "@components/layout/head";

import {
  HiFolder,
  HiHome,
  HiMailOpen,
  HiQuestionMarkCircle,
} from "react-icons/hi";
import { Nav } from "@components/layout/nav";

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}
export function Layout({ children }: LayoutProps) {
  const [selectedItem, setSelectedItem] = useState(0);
  const links = [
    {
      id: 1,
      icon: <HiHome size={20} />,
      name: "Home",
      path: "#home",
    },
    {
      id: 2,
      icon: <HiQuestionMarkCircle size={20} />,
      name: "About me",
      path: "#about",
    },
    {
      id: 3,
      icon: <HiFolder size={20} />,
      name: "Projects",
      path: "#projects",
    },
    {
      id: 4,
      icon: <HiMailOpen size={20} />,
      name: "Contact me",
      path: "#contact",
    },
  ];

  return (
    <div className="flex flex-col">
      <Head title={"Bataklik Portfolio:"} section={links[selectedItem].name} />
      <Nav links={links} />
      {children}
      <Footer />
    </div>
  );
}
