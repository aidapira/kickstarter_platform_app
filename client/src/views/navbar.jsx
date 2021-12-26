import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Nav, NavLink, NavMenu} from '../content/navbarElements';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
          <Nav>
            <NavMenu>
                <NavLink to="/create-posts">
                    Create a Post
                </NavLink>
                <NavLink to="/view-posts">
                    View Posts
                </NavLink>
            </NavMenu>
            <Button color="inherit">Login</Button>
          </Nav>
      </AppBar>
    </Box>
  );
}