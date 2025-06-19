import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from '@mui/icons-material/Apps';
import { Link } from "react-router-dom";

function PageA() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'firebrick' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <AppsIcon sx={{color: 'powderblue'}}/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              SAU-News
            </Typography>          
            <Button color="inherit">Contact</Button>
            <Button color="inherit">About</Button>
            {/* <Link color="inherit" to="/login">Login</Link> */}
            <Button color="inherit" component={Link} to="/login">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default PageA;
