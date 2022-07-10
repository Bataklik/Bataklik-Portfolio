import { Box } from "@mui/material";
import { AppBar } from "../AppBar";
import { Footer } from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box>
      <AppBar />
      {children}
      <Footer />
    </Box>
  );
}
