"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Box, Divider, Tabs, Tab } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import myIcon from "../../../../public/indeed.svg";

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#ffffff",
          pl: 0,
          pr: 0,
          boxShadow: "none",
          borderBottom: "1px solid #e4e2e0",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ mb: 1 }}>
              <Image src={myIcon} alt="My Icon" width={110} height={40} />
            </Box>
            <Box sx={{ ml: 3 }}>
              <Tabs
                value={currentPath}
                sx={{
                  "& .MuiTabs-indicator": {
                    height: "3px",
                    bottom: "1px", // Position the underline lower
                    color: "black",
                  },
                }}
              >
                <Tab
                  label="Home"
                  value="/Homepage"
                  component={Link}
                  href="/Homepage"
                  sx={{
                    textTransform: "none",
                    color: "black",
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
                  }}
                />
              </Tabs>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
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
              <Button sx={{ color: "black", textTransform: "none" }}>FR</Button>
              <Button sx={{ color: "black", textTransform: "none" }}>EN</Button>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
            <Button sx={{ color: "black", textTransform: "none" }}>
              Employers/Post Job
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
