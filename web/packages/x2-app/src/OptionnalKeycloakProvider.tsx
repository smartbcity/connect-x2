import { KeycloakProvider, KeycloackService, useAuth } from '@smartb/archetypes-ui-providers';
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
                initOptions={{ onLoad: "login-required" }}
                loadingComponent={<LoadingPage />}
            >
                {children}
            </KeycloakProvider>
        )
    }
    return children
}

type ssmInfo = {
    url: string
    organizationName: string
    chaincodeId: string
}

type StaticServices = {
    getSSMInfo: { returnType: ssmInfo },
}

const staticServices: KeycloackService<StaticServices> = {
    getSSMInfo: (keycloack) => {
        return {
            //@ts-ignore
            url: keycloack?.tokenParsed?.ssmApiUrl,
            //@ts-ignore
            chaincodeId: keycloack?.tokenParsed?.ssmChaincodeId,
            //@ts-ignore
            organizationName: keycloack?.tokenParsed?.ssmOrganizationName,
        }
    }
}

export const useExtendedAuth = () => useAuth<StaticServices>(staticServices)
