import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { history } from "../../store";

// interface NoMatchPageProps {
//   setTitle: (title: string) => void;
// }

const NoMatchPage = (/* props: NoMatchPageProps */) => {
  // const { setTitle } = props;
  // useEffect(() => {
  //   setTitle("Page introuvable");
  // }, [setTitle]);
  return <h3>Cette page n'existe pas</h3>;
};

export const AppRouter = () => {

  return (
    <>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" > 
          <div>dashboard</div>
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
      </ConnectedRouter>
    </>
  );
};
