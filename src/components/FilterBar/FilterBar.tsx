import {
  Button,
  Menu,
  MenuItem,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const styles = {
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "#202020",
    },
  },
};

interface FilterBarProps {
  handleItemClick: (sortBy: string) => void;
}
export default function FilterBar({ handleItemClick }: FilterBarProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container>
      <Stack flexDirection={"row-reverse"}>
        <BarButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="text"
          disableRipple={true}
        >
          <BarText>Filter</BarText>
        </BarButton>
        <Menu
          sx={styles.menu}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <BarItem
            onClick={() => {
              handleClose();
              handleItemClick("rating");
            }}
          >
            Rating: 0 to 5
          </BarItem>
          <BarItem onClick={handleClose}>Rating: 5 to 0</BarItem>
          <BarItem
            onClick={() => {
              handleClose();
              handleItemClick("title");
            }}
          >
            Title: A to Z
          </BarItem>
          <BarItem onClick={handleClose}>Title: Z to A</BarItem>
        </Menu>
      </Stack>
    </Container>
  );
}

const BarText = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "1rem",
  fontWeight: "lighter",
  textTransform: "capitalize",
}));
const BarItem = styled(MenuItem)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "white",
}));

const BarButton = styled(Button)(({ theme }) => ({
  width: "100px",
}));
