import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Post from './components/Main/Post/Post';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Main />

        <Switch>
          <Route path="/post/:id" component={Post}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
