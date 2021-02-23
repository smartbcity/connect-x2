import React from "react";
import {Link, Route, Switch} from "react-router-dom";

const NoMatchPage = (/* props: NoMatchPageProps */) => {
  return <h3>Cette page n'existe pas</h3>;
};

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" >
        <div>dashboard</div>
          <Link to="sessions">About</Link>
      </Route>
      <Route exact path="/sessions" >
        <div>sessions</div>
      </Route>
      <Route exact path="/details" >
        <div>details</div>
      </Route>
      <Route path="*">
        <NoMatchPage />
      </Route>
    </Switch>
  );
};
