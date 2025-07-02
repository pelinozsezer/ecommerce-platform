import { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
