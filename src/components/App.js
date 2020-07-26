import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Home";
import Aboutpage from "./About";
import ItemDetail from "./ItemDetails";

const App = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage item={props.itemList} />
        </Route>
        <Route exact path="/about">
          <Aboutpage />
        </Route>
        <Route exact path="/items/:itemId">
          <ItemDetail />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
