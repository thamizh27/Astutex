import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Series from "./components/Series";
import Movies from "./components/Movies";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Series} path="/series" />
        <Route component={Movies} path="/movies" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
