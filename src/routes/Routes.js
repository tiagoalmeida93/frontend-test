import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "../components/Loader/Loader.jsx";
import Home from "../pages/Home/Home.jsx";
import Movie from "../pages/Movie/Movie.jsx";

const Routes = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={Movie} />
        <Route path="/" component={Home} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
