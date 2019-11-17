import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/homepage";
import ArtCollection from "./pages/artcollection";
import About from "./pages/about";
import WorkWithMe from "./pages/workWithMe";
import Commissions from "./pages/commisions";

function App() {
  return (
    <div>
      <Switch>
        <Route default exact path='/' component={Homepage} />
        <Route path='/illustrations' component={ArtCollection} />
        <Route path='/Sketches' component={ArtCollection} />
        <Route path='/About' component={About} />
        <Route path='/WorkWithMe' component={WorkWithMe} />
        <Route path='/Commissions' component={Commissions} />
      </Switch>
    </div>
  );
}

export default App;
