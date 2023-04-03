import React from "react";
import Nead from "next/head";

interface HeadProps {
  title: string;
  section: string;
}
export default function Head({ title, section }: HeadProps) {
  let text = `${title} ${section}`;
  return (
    <Nead>
      <title>{text}</title>
    </Nead>
  );
}
