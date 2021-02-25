import Dashboard from "App/pages/Dashboard";
import Details from "App/pages/Details";
import Sessions from "App/pages/Sessions";
import {Route, Switch} from "react-router-dom";

const NoMatchPage = (/* props: NoMatchPageProps */) => {
  return <h3>Cette page n'existe pas</h3>;
};

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" >
        <Dashboard />
      </Route>
      <Route exact path="/sessions" >
        <Sessions />
      </Route>
      <Route exact path="/details" >
        <Details />
      </Route>
      <Route path="*">
        <NoMatchPage />
      </Route>
    </Switch>
  );
};
