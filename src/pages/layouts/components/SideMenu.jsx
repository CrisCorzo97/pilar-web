import { Box, Drawer } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { drawerMenu } from "../../../constants/menu";
import Menu from "./Menu";

const drawerWidth = 240;

const SideMenu = ({ open, onClose }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (open) {
      onClose();
    }
  }, [pathname]);

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        open={open}
        onClose={onClose}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Menu items={drawerMenu} />
      </Drawer>
    </Box>
  );
};

export default SideMenu;
