"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", icon: <HomeIcon /> },
    { label: "My Network", icon: <PeopleIcon /> },
    { label: "Jobs", icon: <BusinessCenterIcon /> },
    { label: "Messaging", icon: <ChatBubbleIcon /> },
    { label: "Notifications", icon: <NotificationsIcon /> },
  ];

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        sx={{ bgcolor: "white", borderBottom: 1, borderColor: "divider" }}
        elevation={0}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters variant="dense" sx={{ minHeight: 52 }}>
            {/* Mobile Menu Icon */}
            <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Logo */}
            <Typography
              variant="h5"
              color="primary"
              fontWeight="bold"
              sx={{ mr: 2 }}
            >
              LinkedIn
            </Typography>

            {/* Search */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                bgcolor: "action.hover",
                borderRadius: 1,
                px: 1,
                width: 280,
              }}
            >
              <SearchIcon color="action" />
              <InputBase placeholder="Search" sx={{ ml: 1, flex: 1 }} />
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Nav Icons */}
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {navItems.map((item) => (
                <IconButton
                  key={item.label}
                  color="inherit"
                  sx={{ flexDirection: "column" }}
                >
                  {item.icon}
                  <Typography variant="caption" sx={{ display: "block" }}>
                    {item.label}
                  </Typography>
                </IconButton>
              ))}
              <IconButton sx={{ flexDirection: "column", p: 0 }}>
                <Avatar
                  sx={{ width: 24, height: 24 }}
                  src="https://i.pravatar.cc/150?img=12"
                />
                <Typography
                  variant="caption"
                  sx={{ display: "block", color: "text.primary" }}
                >
                  Me
                </Typography>
              </IconButton>
            </Stack>

            {/* Mobile Avatar (only avatar shown, nav is in drawer) */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  src="https://i.pravatar.cc/150?img=12"
                />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
