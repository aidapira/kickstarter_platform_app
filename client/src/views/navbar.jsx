import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
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