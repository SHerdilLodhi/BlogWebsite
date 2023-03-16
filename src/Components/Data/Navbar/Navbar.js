import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useMediaQuery } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../../../Context";
import "./Navbar.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

const navItems = ["HOME", "PROFILE", "LOGOUT"];
const drawerWidth = 240;

function DrawerAppBar(props) {
  const isMobile = useMediaQuery("(max-width: 600px)");
  console.log(isMobile);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, Logout } = React.useContext(MyContext);
  let nav = useNavigate()
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  const drawer = (
    <Box  onClick={handleDrawerToggle} sx={{ textAlign: "center" , backgroundColor:"#F9B776"}}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <img onClick={()=>nav('/home')} className="navlogo" src="./logo.png" alt="" />
      </Typography>
      <Divider />
      <List>
        {user ? (
          <>
            {" "}
            <NavLink to="/home">
              <ListItem key={navItems[0]} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={navItems[0]} />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to="/profile">
              <ListItem key={navItems[1]} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={navItems[1]} />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink onClick={() => Logout()}>
              {" "}
              <ListItem key={navItems[2]} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={navItems[2]} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </>
        ) : (
          <NavLink to={"/signup"}>
            {" "}
            <ListItem key={"SIGNUP"} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={"SIGNUP"} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        )}

        
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar className="nav-main" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img onClick={()=>nav('/home')} className="navlogo" src="./logo.png" alt="" />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {user ? (
              <>
                <NavLink to="/home">
                   <Button key={navItems[0]}>{navItems[0]}</Button>
                </NavLink>

                <NavLink to="/profile">
                  <Button key={navItems[1]}>{navItems[1]}</Button>
                </NavLink>

                <NavLink>
                  <Button onClick={() => Logout()} key={navItems[2]}>
                    {navItems[2]}
                  </Button>
                </NavLink>
              </>
            ) : (
              <NavLink to="/signup">
                <Button key={"SIGNUP"} sx={{ color: "#fff" }}>
                  {"SIGNUP"}
                </Button>
              </NavLink>
            )}
          </Box>
        </Toolbar>
        {isMobile ? (
          <AiOutlinePlusCircle onClick={()=>nav("/addblog")} size={86} className="add-blog-button" />
        ) : (
          <AiOutlinePlusCircle size={95}onClick={()=>nav("/addblog")} className="add-blog-button" />
        )}
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
