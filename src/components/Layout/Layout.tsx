import { Box } from "@mui/material";
import { AppBar } from "../AppBar";
import { PersonProps } from "../ContactModal/ContactModal";
import { Footer } from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
  person: PersonProps;
}

export default function Layout({ children, person }: LayoutProps) {
  return (
    <Box>
      <AppBar />
      {children}
      <Footer />
    </Box>
  );
}
