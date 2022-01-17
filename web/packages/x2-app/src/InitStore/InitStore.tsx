import { useEffect } from "react";
import {SSM, SsmPath, SsmUriDTO} from "ssm";
import { LoadingPage } from "components";
import { SSMRequester } from "ssm";
import { useExtendedAuth } from "OptionnalKeycloakProvider";
import App from "App";

interface InitStoreProps {
  ssmList: Map<SsmPath, SSM>
  setSsmList: (ssmList: Map<SsmUriDTO, SSM>) => void
}

export const InitStore = (props: InitStoreProps) => {
  const { ssmList, setSsmList } = props;

  const auth = useExtendedAuth()

  useEffect(() => {
    if (auth?.keycloak.authenticated) {
      //@ts-ignore
      window.token = keycloak.token
      //@ts-ignore
      window._env_.COOP_URL = service.getSSMInfo().url
    }
    SSMRequester.fetchSSMsAsync(setSsmList)
  }, [auth?.keycloak.authenticated, auth?.service.getSSMInfo, setSsmList])


  const isLoading = () => {
    if (ssmList.size === 0) return true
    return false
  }

  if (isLoading()) return (
    <LoadingPage />
  )

  return (
    <App />
  );
};

