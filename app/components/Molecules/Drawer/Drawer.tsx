"use client";
import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";
import { DrawerComponentProps } from "../Drawer/Drawer.types"

const Drawer: React.FC<DrawerComponentProps> = ({ toggleDrawer, pathname }) => {
  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem
          button
          component={Link}
          href="/Homepage"
          selected={pathname === "/Homepage"}
        >
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          component={Link}
          href="/company-reviews"
          selected={pathname === "/company-reviews"}
        >
          <ListItemText primary="Company reviews" />
        </ListItem>
        <ListItem
          button
          component={Link}
          href="/salary-guide"
          selected={pathname === "/salary-guide"}
        >
          <ListItemText primary="Salary guide" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Drawer;
