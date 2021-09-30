import React from "react";
import "./App.css";
import Navbar from "./shared/components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./modules/Home";
import Products from "./modules/Products";
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/produtos" component={Products} />
      </Switch>
    </Router>
  );
};

export default App;
