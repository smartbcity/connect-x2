import { Typography } from "@material-ui/core";
import Dashboard from "App/pages/Dashboard";
import Details from "App/pages/Details";
import Sessions from "App/pages/Sessions";
import {Route, Switch} from "react-router-dom";

const NoMatchPage = (/* props: NoMatchPageProps */) => {
  return <Typography variant="h5">Cette page n'existe pas</Typography>;
};

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" >
        <Dashboard />
      </Route>
      <Route exact path="/:ssmName/sessions" >
        <Sessions />
      </Route>
      <Route exact path="/:sessionName/details" >
        <Details />
      </Route>
      <Route path="*">
        <NoMatchPage />
      </Route>
    </Switch>
  );
};
