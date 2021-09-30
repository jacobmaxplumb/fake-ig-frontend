import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Landing from './components/Landing';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import NavBar from './components/NavBar';

function App(props) {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <NavBar />
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

export default App;
