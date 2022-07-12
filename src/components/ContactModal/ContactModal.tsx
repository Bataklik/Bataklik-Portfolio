import {
  Box,
  Button,
  Link,
  Modal,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import ChevronIcon from "@mui/icons-material/ChevronLeft";
import EmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
export interface PersonProps {
  name: string;
  email: string;
  linkedin: string;
  github: string;
  img: string;
}
interface ContactModalProps {
  open: boolean;
  handleClose: () => void;
  person: PersonProps;
}

export default function ContactModal({
  open,
  handleClose,
  person,
}: ContactModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox>
        <HStack>
          <Stack sx={{ flex: 2 }}>
            <Typography variant="h6" color={"whitesmoke"}>
              {person.name}
            </Typography>
            <Box sx={{ alignItems: "center" }}>
              <LinkStack>
                <EmailIcon
                  sx={{ paddingRight: "5px" }}
                  htmlColor="#f5f5f5"
                  fontSize={"small"}
                />
                <Link href={person.email} fontSize={14}>
                  E-mail
                </Link>
              </LinkStack>
              <LinkStack>
                <LinkedInIcon
                  sx={{ paddingRight: "5px" }}
                  htmlColor="#f5f5f5"
                  fontSize={"small"}
                />
                <Link href={person.linkedin} fontSize={14}>
                  Linkedin
                </Link>
              </LinkStack>
              <LinkStack>
                <GitHubIcon
                  sx={{ paddingRight: "5px" }}
                  htmlColor="#f5f5f5"
                  fontSize={"small"}
                />
                <Link variant="inherit" href={person.github} fontSize={14}>
                  {person.github.split("/")[3]}
                </Link>
              </LinkStack>
            </Box>
            <StyledButton onClick={handleClose}>
              <HStack>
                <ChevronIcon />
                Back
              </HStack>
            </StyledButton>
          </Stack>
          <Stack
            sx={{
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <Profile src={person.img} alt={`Profile of ${person.name}`} />
          </Stack>
        </HStack>
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
  width: "60%",
  paddingRight: "15px",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  "&:hover": {
    backgroundColor: "rgba(235, 235, 235, 0.9)",
  },
}));
const HStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: 2,
}));
const LinkStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  padding: "5px 10px",
}));
const Profile = styled("img")(({ theme, src }) => ({
  position: "absolute",
  src: src,
  width: "120px",
  borderRadius: "50%",
  top: 10,
  right: 10,
}));
