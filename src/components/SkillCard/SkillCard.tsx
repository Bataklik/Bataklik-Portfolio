import { Card, Rating, Stack, styled, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { motion } from "framer-motion";
interface SkillCardProps {
  title: string;
  subtitle: string;
  rating: number;
  image: string;
}

const styles = {
  favoriteBorderIcon: {
    color: "rgba(255,255,255,0.7)",
  },
};

export default function SkillCard({
  title,
  subtitle,
  rating,
  image,
}: SkillCardProps) {
  return (
    <MainCard>
      <VStack spacing={1}>
        <HStack>
          <CardTitle>{title}</CardTitle>
          <CardSubTitle>{subtitle}</CardSubTitle>
          <StyledRating
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={
              <FavoriteBorderIcon
                sx={styles.favoriteBorderIcon}
                fontSize="inherit"
              />
            }
            name="half-rating-read"
            value={rating}
            readOnly
          />
        </HStack>
        <HStack>
          <CardImage whileHover={{ scale: 1.1 }} src={image} />
        </HStack>
      </VStack>
    </MainCard>
  );
}

const MainCard = styled(Card)(({ theme }) => ({
  marginTop: "20px",
  padding: "25px",
  borderRadius: "15px",
  background: "rgba( 32, 32, 32, 0.35 )",
  boxShadow: "0 5px 22px 0 rgba(245, 245, 245, 0.1)",
  WebkitBackdropFilter: "blur( 7.5px )",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  backdropFilter: "blur( 7.5px )",
  "&:hover": {
    backgroundColor: "#404040",
    transition: "all 0.6s ease-in-out",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "15px",
  },
}));

const VStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {},
}));

const HStack = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {},
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "36px",
  fontWeight: 500,
  flexWrap: "wrap",
  letterSpacing: "4px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
  },
}));

const CardImage = styled(motion.img)(({ theme, src }) => ({
  src: src,
  borderRadius: 20,
  width: "250px",
  height: "250px",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    width: "100px",
    height: "100px",
  },
  [theme.breakpoints.between("xs", "md")]: {
    width: "70px",
    height: "70px",
  },
}));

const CardSubTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "1.5rem",
  fontWeight: 300,
  fontStyle: "italic",
  letterSpacing: "4px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    fontWeight: 250,
  },
}));
const StyledRating = styled(Rating)({
  marginTop: "10px",
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
});
