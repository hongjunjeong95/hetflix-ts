import React from "react";
import { Detail } from "pages/detail";
import { Movie } from "pages/movie";
import { Search } from "pages/search";
import { TV } from "pages/tv";
import {
  BrowserRouter as RRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

export const Router = () => {
  return (
    <RRouter>
      <Switch>
        <Route exact path="/" component={Movie} />
        <Route exact path="/tv" component={TV} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/movie/:id" component={Detail} />
        <Route exact path="/tv/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </RRouter>
  );
};
