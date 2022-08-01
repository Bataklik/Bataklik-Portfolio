import { Rating, Stack, styled } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { motion, AnimatePresence } from "framer-motion";
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
    <AnimatePresence>
      <MainCard
        transition={{ layout: { duration: 2, type: "spring" } }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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
              precision={0.5}
              value={rating}
              readOnly
            />
          </HStack>
          <HStack>
            <CardImage
              layout={"position"}
              whileHover={{ scale: 1.1 }}
              src={image}
            />
          </HStack>
        </VStack>
      </MainCard>
    </AnimatePresence>
  );
}

const MainCard = styled(motion.div)(({ theme }) => ({
  marginTop: "20px",
  cursor: "pointer",
  padding: "25px",
  borderRadius: "15px",
  background: "rgba( 32, 32, 32, 5 )",
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
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {},
}));

const CardTitle = styled(motion.h2)(({ theme }) => ({
  color: "#fff",
  fontSize: "36px",
  fontWeight: 500,
  flexWrap: "wrap",
  letterSpacing: "4px",
  width: "100%",
  margin: 2,
  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
  },
}));

const CardImage = styled(motion.img)(({ theme, src }) => ({
  src: src,
  borderRadius: 20,
  width: "200px",
  height: "200px",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    width: "110px",
    height: "110px",
  },
}));

const CardSubTitle = styled(motion.p)(({ theme }) => ({
  color: "#fff",
  fontSize: "1.5rem",
  fontWeight: 300,
  padding: "5px",
  marginRight: "20px",
  fontStyle: "italic",
  letterSpacing: "4px",
  width: "90%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    fontWeight: 250,
    width: "95%",
  },
}));
const StyledRating = styled(Rating)({
  marginTop: "10px",
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
});
