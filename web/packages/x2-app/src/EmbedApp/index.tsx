import { Router } from "@smartb/g2-providers";
import {Route} from "react-router-dom";
import ProtocolDiagram  from "./pages/ProtocolDiagram";
import SessionInformation  from "./pages/SessionInformation";
import TransactionDetail  from "./pages/TransactionDetail";
import TransactionHistory  from "./pages/TransactionHistory";

export const EmbedApp = () => {
  return (
    <Router noMatchPageProps={{noGoBack: true}}>
      <Route exact path="/embed/:ssmName/diagram" >
        <ProtocolDiagram />
      </Route>
      <Route exact path="/embed/:ssmName/:sessionName/informations" >
        <SessionInformation />
      </Route>
      <Route exact path="/embed/:ssmName/:sessionName/:transactionId/details" >
        <TransactionDetail />
      </Route>
      <Route exact path="/embed/:ssmName/:sessionName/history" >
        <TransactionHistory />
      </Route>
    </Router>
  );
};

export default EmbedApp