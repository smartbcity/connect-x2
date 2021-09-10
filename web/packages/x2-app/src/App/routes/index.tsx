import { Router } from "@smartb/g2-providers";
import Dashboard from "App/pages/Dashboard";
import Details from "App/pages/Details";
import Sessions from "App/pages/Sessions";
import {Route} from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/" >
        <Dashboard />
      </Route>
      <Route exact path="/:ssmName/sessions" >
        <Sessions />
      </Route>
      <Route exact path="/:ssmName/:sessionName/details" >
        <Details />
      </Route>
    </Router>
  );
};
