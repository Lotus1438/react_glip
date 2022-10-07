import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "./component/Container";
import Context from "./Context/context";
import { messages } from "./messages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">

        <Context message={messages}>
          {/* <Container /> */}
          <Switch>
            {/* <Route path='/'> */}
              {/* </Route>          */}
              <Container/>
          </Switch>
        </Context>
      </div>
    </Router>
  );
}

export default App;
