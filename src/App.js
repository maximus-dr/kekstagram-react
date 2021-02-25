import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main/Main";
import Navbar from "./components/Navbar/Navbar/Navbar";
import Post from './components/Main/Post/Post/Post';
import SignUp from './components/Navbar/Auth/SignUp/SignUp';
import Login from './components/Navbar/Auth/Login/Login';
import { useState } from "react";
import { auth } from './firebase/config';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  auth.onAuthStateChanged(user => {
    user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });


  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/post/:id" component={Post} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
