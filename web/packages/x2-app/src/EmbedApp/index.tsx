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
      <Route exact path="/embed/:ssmName/:sessionName/:transactionId/details" >
        <TransactionDetail />
      </Route>
      <Route exact path="/embed/:ssmName/:sessionName/:transactionId/history" >
        <TransactionDetail />
      </Route>
    </Router>
  );
};

export default EmbedApp