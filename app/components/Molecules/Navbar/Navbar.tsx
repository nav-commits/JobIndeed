"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Box, Divider, Tabs, Tab, Drawer, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import myIcon from "../../../../public/indeed.svg";
import DrawerComponent from "../Drawer/Drawer";
export default function Navbar() {
  const currentPath = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1020px)");

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#ffffff",
          pl: 0,
          pr: 0,
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            pt: 1,
            borderBottom: "1px solid #e4e2e0",
            minHeight: "auto",
            "@media (min-width: 600px)": {
              minHeight: "auto",
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link href="/Homepage">
              <Image src={myIcon} alt="My Icon" width={110} height={40} />
            </Link>
            {!isMobile && (
              <Tabs value={currentPath} sx={{ ml: 2 }}>
                <Tab
                  label="Home"
                  value="/Homepage"
                  component={Link}
                  href="/Homepage"
                  sx={{
                    textTransform: "none",
                    color: "black",
                    textAlign: "left",
                    "&.Mui-selected": {
                      color: "black",
                    },
                  }}
                />
                <Tab
                  label="Company reviews"
                  value="/company-reviews"
                  component={Link}
                  href="/company-reviews"
                  sx={{
                    textTransform: "none",
                    color: "black",
                    textAlign: "left",
                    "&.Mui-selected": {
                      color: "black",
                    },
                  }}
                />
                <Tab
                  label="Salary guide"
                  value="/salary-guide"
                  component={Link}
                  href="/salary-guide"
                  sx={{
                    textTransform: "none",
                    color: "black",
                    textAlign: "left",
                    "&.Mui-selected": {
                      color: "black",
                    },
                  }}
                />
              </Tabs>
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMobile ? (
              <>
                <IconButton
                  onClick={toggleDrawer(true)}
                  sx={{ color: "black" }}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  <DrawerComponent
                    toggleDrawer={toggleDrawer}
                    pathname={currentPath}
                  />
                </Drawer>
              </>
            ) : (
              <>
                <IconButton sx={{ mr: 2, color: "black" }}>
                  <MessageIcon />
                </IconButton>
                <IconButton sx={{ mr: 2, color: "black" }}>
                  <NotificationsIcon />
                </IconButton>
                <IconButton sx={{ mr: 1 }}>
                  <Badge badgeContent={1} color="primary">
                    <PersonIcon color="action" sx={{ color: "black" }} />
                  </Badge>
                </IconButton>
                <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button sx={{ color: "black", textTransform: "none" }}>
                    FR
                  </Button>
                  <Button sx={{ color: "black", textTransform: "none" }}>
                    EN
                  </Button>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
                <Button sx={{ color: "black", textTransform: "none" }}>
                  Employers/Post Job
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
