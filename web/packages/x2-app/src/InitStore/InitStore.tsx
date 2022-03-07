import { useEffect } from "react";
import {Protocol, ProtocolName} from "ssm";
import { LoadingPage } from "components";
import { SSMRequester } from "ssm";
import { useExtendedAuth } from "OptionnalKeycloakProvider";
import App from "App";

interface InitStoreProps {
  protocols: Map<ProtocolName, Protocol>
  setProtocols: (protocols: Map<ProtocolName, Protocol>) => void
}

export const InitStore = (props: InitStoreProps) => {
  const { protocols, setProtocols } = props;

  const auth = useExtendedAuth()

  useEffect(() => {
    if (auth?.keycloak.authenticated) {
      //@ts-ignore
      window.token = keycloak.token
      //@ts-ignore
      window._env_.COOP_URL = auth?.service.getSSMInfo().url
    }
    SSMRequester.fetchProtocolsAsync(setProtocols)
  }, [auth?.keycloak.authenticated, auth?.service.getSSMInfo, setProtocols])


  const isLoading = () => {
    return protocols.size === 0;

  }

  if (isLoading()) return (
    <LoadingPage />
  )

  return (
    <App />
  );
};

