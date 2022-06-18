import { Box } from "@mui/material";
import Navbar from "../AppBar";
import Footer from "../Footer";

export default function index({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <Box>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}
