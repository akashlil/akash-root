import "./App.css";
import { useState } from "react";
import Admin from "./componentes/Admin/Admin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./componentes/About/About";
import Home from "./componentes/Home/Home";
import NotFount from "./componentes/Notfount/NotFount";
import ProductDeteals from "./componentes/ProductDeteals/ProductDeteals";
import Nav from "./componentes/Nav/Nav";
import SingleFish from "./componentes/SingleFish/SingleFish";

function App() {
  const [searchValue, setSerValu] = useState("");
  const searchValuefun = (name) => {
    setSerValu(name);
  };
  return (
    <Router>
      <Nav searchValuefun={searchValuefun}></Nav>
      <Switch>
        <Route exact path="/admin/">
          <Admin></Admin>
        </Route>

        <Route path="/about/">
          <About></About>
        </Route>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/producd-detaels/">
          <ProductDeteals searchValue={searchValue}></ProductDeteals>
        </Route>

        <Route path="/single-fish/:fishId">
          <SingleFish></SingleFish>
        </Route>

        <Route path="*">
          <NotFount></NotFount>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
