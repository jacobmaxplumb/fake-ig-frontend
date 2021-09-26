import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useState } from "react";
import { connect } from "react-redux"
import { Link, withRouter, useHistory } from "react-router-dom";
import { signInUser, signOutUser } from "../services/firebase.service";
import { useUser } from "../hooks/user.hook";

const NavBar = (props) => {
    const [user, setUser] = useUser();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const history = useHistory();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const signIn = () => {
        signInUser().then((currentUser) => {
            setUser(currentUser);
            history.push('/');
        })
    }

    const signOut = () => {
        signOutUser().then(() => {
            setUser(null);
            history.push('/login');
        })
    }

    return (
        <AppBar position="static">
            <Toolbar>
                {user !== null ?
                    <>
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
                            <MenuItem onClick={handleClose}><Link to="/">Home</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/profile">Profile</Link></MenuItem>
                        </Menu>
                    </> : null
                }
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {props.title}
                </Typography>
                {user ?
                    <Button color="inherit" onClick={signOut}>Logout</Button> :
                    <Button color="inherit" onClick={signIn}>Login</Button>
                }
            </Toolbar>
        </AppBar>
    );
}

const mapStateToProps = (state) => {
    return {
        title: state.app.title
    }
} 

export default withRouter(connect(mapStateToProps, {})(NavBar));