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
import { useState } from 'react';
import Landing from './components/Landing';

function App(props) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!localStorage.getItem('token'));

  const signIn = () => {
    signInUser().then(() => {
      setIsUserLoggedIn(true);
    })
  }

  const signOut = () => {
    signOutUser().then(() => {
      setIsUserLoggedIn(false);
    })
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {isUserLoggedIn ? (<>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
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
        <Landing />
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    title: state.app.title
  }
}

export default connect(mapStateToProps, {})(App);
