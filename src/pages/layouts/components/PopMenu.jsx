import {
  Avatar,
  Box,
  IconButton,
  ListItemText,
  MenuItem as MenuItemMui,
} from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { popMenu } from "../../../constants/menu";
import MenuPopover from "./MenuPopover";

const PopMenu = () => {
  const menuRef = useRef(null);

  const [open, setOpen] = useState(false);

  return (
    <Box>
      <IconButton
        size="small"
        sx={{ ml: 2 }}
        onClick={() => setOpen(true)}
        ref={menuRef}
      >
        <Avatar sx={{ width: 32, height: 32 }}>C</Avatar>
      </IconButton>
      <MenuPopover
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={menuRef.current}
        sx={{
          marginTop: 2.5,
          marginLeft: 0.5,
          overflow: "inherit",
          boxShadow: "1px, 1px, 2px, 2px rgb(0 0 0 / 20%)",
          width: 320,
        }}
      >
        {popMenu.map((item) => (
          <MenuItemMui
            key={item.title}
            to={item.path}
            component={RouterLink}
            onClick={() => setOpen(false)}
            sx={{ py: 1, px: 2.5 }}
          >
            <ListItemText disableTypography>{item.title}</ListItemText>
          </MenuItemMui>
        ))}
      </MenuPopover>
    </Box>
  );
};

export default PopMenu;
