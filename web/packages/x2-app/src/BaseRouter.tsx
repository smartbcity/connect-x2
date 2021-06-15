import { Router } from '@smartb/archetypes-ui-providers'
import { Route } from 'react-router'
import EmbedApp from "EmbedApp";
import InitStore from 'InitStore';

export const BaseRouter = () => {
    return (
        <Router>
            <Route path="/embed" >
                <EmbedApp />
            </Route>
            <Route path="*" >
                <InitStore />
            </Route>
        </Router>
    )
}
