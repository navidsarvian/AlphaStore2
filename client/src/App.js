import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav1 from "./components/Nav";
import './App.css';
import './index.css';

const App = () =>
  <Router>
    <div>
      <Nav1 />
      {/* <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch> */}
    </div>
  </Router>;
export default App;
