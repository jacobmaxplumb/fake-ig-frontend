import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Landing from './components/Landing';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <NavBar />
      </Box>
      <Container maxWidth="lg">
        <Switch>
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/login" component={Landing} />
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
