import "./App.css";
import Container from "./component/Container";
import Context from "./Context/context";
import { messages } from "./messages";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Context message={messages}>
          <Container />
        </Context>
      </div>
    </Router>
  );
}

export default App;
