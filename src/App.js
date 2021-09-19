import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { signIn } from './services/firebase.service';

function App(props) {

  return (
    <div className="App">
      <h1>{props.title}</h1>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    title: state.app.title
  }
}

export default connect(mapStateToProps, {})(App);
