import { Router } from "@smartb/g2-providers";
import Dashboard from "App/pages/Dashboard";
import Details from "App/pages/Details";
import Sessions from "App/pages/Sessions";
import {Route} from "react-router-dom";
import {router} from "../../store/router";

export const AppRouter = () => {

  return (
    <Router>
      <Route exact path={router.path.dashboard} >
        <Dashboard />
      </Route>
      <Route exact path={router.path.sessions} >
        <Sessions />
      </Route>
      <Route exact path={router.path.sessionDetails} >
        <Details />
      </Route>
    </Router>
  );
};
