import { Box, Button, Modal, Stack, styled, Typography } from "@mui/material";
import React from "react";
import ChevronIcon from "@mui/icons-material/ChevronLeft";

import { EducationCard } from "../EducationCard";
export interface PersonProps {
  name: string;
  email: string;
  linkedin: string;
  github: string;
  img: string;
}
interface AboutModalProps {
  open: boolean;
  handleClose: () => void;
  person: PersonProps;
}

export default function AboutModal({
  open,
  handleClose,
  person,
}: AboutModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox>
        <Stack>
          <Title>About</Title>
          <Description>
            I'm a Belgian based developer, passionate about react, and
            react-native apps. Have created a few apps, and I'm always looking
            for new challenges.
          </Description>
          <Stack>
            <Title>Education</Title>
            <EducationCard
              school={"Sint Lievenscollege Business"}
              education={
                "Diploma of 2nd education, computer science management"
              }
              startDate={"Sep 2016"}
              endDate={"Jun 2018"}
            />
            <EducationCard
              school={"Hogent"}
              education={"Applied Computer Science, Computer Science"}
              startDate={"Oct 2018"}
              endDate={"Jun 2019"}
            />
            <EducationCard
              school={"Hogent"}
              education={"Graduate Programming, Computer Programming"}
              startDate={"Oct 2020"}
              endDate={"Jun 2022"}
            />
          </Stack>
          <StyledButton onClick={handleClose}>
            <HStack>
              <ChevronIcon />
              Back
            </HStack>
          </StyledButton>
        </Stack>
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
  borderRadius: "20px",
  padding: 15,
  background: "rgba( 0, 0, 0, 0.7 )",
  boxShadow: "0 8px 32px 0 rgba( 245, 245, 245, 0.15 )",
  backdropFilter: "blur( 7.5px )",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  background: "rgba( 66, 66, 66, 0.2 )",
  boxShadow: "0 2px 12px 0 rgba( 245, 245, 245, 0.25 )",
  backdropFilter: "blur( 7.5px )",
  WebkitBackdropFilter: "blur( 7.5px )",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  fontSize: "14px",
  letterSpacing: "1px",
  borderRadius: "10px",
  padding: "10px",
  width: "50%",
  margin: "2px",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#292929",
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: "6px",
    paddingBottom: "6px",
    paddingLeft: "25px",
    paddingRight: "25px",
    fontSize: "14px",
  },
}));
const HStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: 2,
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "whitesmoke",
  fontSize: "18px",
  fontWeight: "bold",
  letterSpacing: "1px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  color: "whitesmoke",
  fontSize: "14px",
  letterSpacing: "1px",
  lineHeight: "1",
  margin: "10px 0",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));