import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, signInUser, signOutUser } from "../services/firebase.service";
import { connect } from "react-redux";

const NavBar = (props) => {
    const [user, setUser] = useState(auth.currentUser);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        setTimeout(() => {
            if (auth.currentUser) {
                setUser(auth.currentUser);
                setIsLoggedIn(true);
            }
        }, 1000);
    }, [])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const signIn = () => {
        signInUser();
    }

    const signOut = () => {
        signOutUser();
    }

    return (
        <AppBar position="static">
            <Toolbar>
                {isLoggedIn ? (<>
                    <IconButton
                        onClick={handleClick}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}><Link to="/home">Home</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/profile">Profile</Link></MenuItem>
                    </Menu>
                </>) : (<></>)}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {props.title}
                </Typography>
                {isLoggedIn ?
                    (<Button color="inherit" onClick={signOut}>Logout</Button>) :
                    (<Button color="inherit" onClick={signIn}>Login</Button>)
                }
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = (state) => {
    return {
      title: state.app.title
    }
  }

export default connect(mapStateToProps, { })(NavBar);