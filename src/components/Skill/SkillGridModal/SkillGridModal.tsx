import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Rating, styled } from "@mui/material";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Close from "@mui/icons-material/Close";
const styles = {
  favoriteBorderIcon: {
    color: "rgba(0,0,0,0.7)",
  },
  closeIcon: {
    position: "absolute",
    color: "rgba(0,0,0,0.7)",
    right: "10px",
    top: "10px",
    cursor: "pointer",
    "&:hover": {
      color: "rgba(0,0,0,0.4)",
    },
  },
};
interface SkillGridModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  image: string;
  description: string;
  rating: number;
}
export default function TransitionsModal({
  open,
  setOpen,
  title,
  image,
  description,
  rating,
}: SkillGridModalProps) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <BoxCard>
          <ImageCard src={image} alt={title} />
          <Close sx={styles.closeIcon} onClick={() => setOpen(false)} />
          <TitleCard variant="h6">{title}</TitleCard>
          <DescriptionCard>{description}</DescriptionCard>
          <BoxRating>
            <TitleRating>Rating</TitleRating>
            <StyledRating
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={
                <FavoriteBorderIcon
                  sx={styles.favoriteBorderIcon}
                  fontSize="inherit"
                />
              }
              name="half-rating-read"
              precision={0.5}
              value={rating}
              readOnly
            />
          </BoxRating>
        </BoxCard>
      </Fade>
    </Modal>
  );
}

const BoxCard = styled(Box)(({ theme }) => ({
  margin: "auto",
  width: "400px",
  height: "500px",
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: 5,
  background: "rgba(236, 236, 236, 0.45)",
  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0 0.37 )",
  backdropFilter: "blur( 9px )",
  WebkitBackdropFilter: "blur( 9px )",
  borderRadius: "10px",
  border: "1px solid rgba( 255, 255, 255, 0.08 )",
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    height: "350px",
  },
}));

const ImageCard = styled(motion.img)(({ theme, src }) => ({
  src,
  borderRadius: 20,
  width: "170px",
  height: "170px",
  margin: "0.5rem auto",
  [theme.breakpoints.down("sm")]: {
    width: "100px",
    height: "100px",
  },
}));

const TitleCard = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
  },
}));

const DescriptionCard = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  marginTop: "0.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const BoxRating = styled(Box)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1.5rem",
  [theme.breakpoints.down("sm")]: {
    marginTop: "1rem",
  },
}));
const TitleRating = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    marginBottom: "0.2rem",
  },
}));

const StyledRating = styled(Rating)({
  marginTop: "10px",
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
});
