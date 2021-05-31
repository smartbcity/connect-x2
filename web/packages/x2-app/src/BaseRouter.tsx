import { Router } from '@smartb/archetypes-ui-providers'
import { Route } from 'react-router'
import App from "App";
import EmbedApp from "EmbedApp";

export const BaseRouter = () => {
    return (
        <Router>
            <Route path="/embed" >
                <EmbedApp />
            </Route>
            <Route path="*" >
                <App />
            </Route>
        </Router>
    )
}
