import { KeycloakProvider } from '@smartb/archetypes-ui-providers';
import { LoadingPage } from 'components';
//@ts-ignore
export const clientId: string | undefined = window._env_.KEYCLOAK_CLIENTID
//@ts-ignore
export const realm: string | undefined = window._env_.KEYCLOAK_REALM
//@ts-ignore
export const url: string | undefined = window._env_.KEYCLOAK_URL

const keycloakConfig = clientId && realm && url ? { clientId: clientId, realm: realm, url: url } : undefined

interface KeycloakProps {
    children: JSX.Element
}

export const OptionnalKeycloakProvider = (props: KeycloakProps) => {
    const { children } = props
    if (keycloakConfig) {
        return (
            <KeycloakProvider
                config={keycloakConfig}
                initOptions={{ onLoad: "login-required"}}
                loadingComponent={<LoadingPage />}
            >
            </KeycloakProvider>
        )
    }
    return children
}

