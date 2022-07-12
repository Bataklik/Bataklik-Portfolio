import { Box, Button, Modal, Stack, styled, Typography } from "@mui/material";
import React from "react";
import ChevronIcon from "@mui/icons-material/ChevronLeft";
interface ContactModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function ContactModal({ open, handleClose }: ContactModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox>
        <Typography
          id="modal-modal-title"
          variant="h6"
          color={"white"}
          component="h2"
        >
          Get In Touch
        </Typography>
        <Typography color={"white"} id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <StyledButton onClick={handleClose}>
          <VStack>
            <ChevronIcon />
            Back
          </VStack>
        </StyledButton>
      </StyledBox>
    </Modal>
  );
}

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "rgba(0, 0, 0, 8)",
  border: "2px solid #fff",
  borderRadius: "20px",
  boxShadow: "5px 5px 5px rgba(0, 0, 0, 1)",
  padding: 15,
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: "black",
  marginTop: "20px",
  paddingRight: "15px",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  "&:hover": {
    backgroundColor: "rgba(235, 235, 235, 0.9)",
  },
}));
const VStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: 2,
}));
