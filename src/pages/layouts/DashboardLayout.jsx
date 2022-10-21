import { AppBar, Toolbar, Box, Typography, Container } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import MenuIcon from "@mui/icons-material/Menu";
import PopMenu from "./components/PopMenu";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="absolute">
        <Toolbar sx={{ pr: "24px" }}>
          <Box px={2} mt={0.5} sx={{ cursor: "pointer" }}>
            <MenuIcon sx={{ color: "white" }} onClick={() => setOpen(true)} />
          </Box>

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Pilar Tecno Web
          </Typography>
          <PopMenu />
        </Toolbar>
      </AppBar>

      <SideMenu open={open} onClose={() => setOpen(false)} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ my: 4 }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};
export default DashboardLayout;
