import { Router } from "@smartb/archetypes-ui-providers";
import {Route} from "react-router-dom";
import ProtocolDiagram  from "./pages/ProtocolDiagram";
import SessionInformation  from "./pages/SessionInformation";
import TransactionDetail  from "./pages/TransactionDetail";

export const EmbedApp = () => {
  return (
    <Router>
      <Route exact path="/embed/:ssmName/diagram" >
        <ProtocolDiagram />
      </Route>
      <Route exact path="/embed/:ssmName/:sessionName/informations" >
        <SessionInformation />
      </Route>
      <Route exact path="/embed/:ssmName/:sessionName/:logId/details" >
        <TransactionDetail />
      </Route>
    </Router>
  );
};

export default EmbedApp