import './App.css';
import { connect } from 'react-redux';
import { signInUser, signOutUser } from './services/firebase.service';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Landing from './components/Landing';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';

function App(props) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!localStorage.getItem('token'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signIn = () => {
    signInUser().then(() => {
      setIsUserLoggedIn(true);
      setRedirect(true);
    })
  }

  const signOut = () => {
    signOutUser().then(() => {
      setIsUserLoggedIn(false);
    })
  }

  return (
    <Router>
      {redirect ? (<Redirect push to="/home" />) : (null)}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {isUserLoggedIn ? (<>
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
            {isUserLoggedIn ?
              (<Button color="inherit" onClick={signOut}>Logout</Button>) :
              (<Button color="inherit" onClick={signIn}>Login</Button>)
            }
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg">
        <Switch>
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/home" component={Home} />
          <Route path="/" component={Landing} />
        </Switch>
      </Container>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    title: state.app.title
  }
}

export default connect(mapStateToProps, {})(App);
