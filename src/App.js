import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Soon from "./components/Soon";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/soon" exact component={Soon} />} />
            <Route path={() => "/main" || "/admin" || "/*"} component={Home} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
