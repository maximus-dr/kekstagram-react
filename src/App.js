import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main/Main";
import Navbar from "./components/Navbar/Navbar/Navbar";


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/new" component={Main} />
          <Route path="/discussed" component={Main} />
          <Route path="/signup" component={Main} />
          <Route path="/login" component={Main} />
          <Route path="/post/:id" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
