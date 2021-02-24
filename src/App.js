import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main/Main";
import Navbar from "./components/Navbar/Navbar/Navbar";
import Post from './components/Main/Post/Post/Post';
import SignUp from './components/Navbar/Auth/SignUp/SignUp';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signup" component={SignUp} />
          <Route path="/post/:id" component={Post} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
