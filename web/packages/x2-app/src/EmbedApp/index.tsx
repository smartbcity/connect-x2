import { Router } from "@smartb/archetypes-ui-providers";
import {Route} from "react-router-dom";
import ProtocolDiagram  from "./pages/ProtocolDiagram";

export const EmbedApp = () => {
  return (
    <Router>
      <Route exact path="/embed/:ssmName/diagram" >
        <ProtocolDiagram />
      </Route>
    </Router>
  );
};

export default EmbedApp