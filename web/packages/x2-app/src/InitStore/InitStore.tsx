import { useEffect } from "react";
import { SSM, defaultProtocols } from "ssm";
import { LoadingPage } from "components";
import { SSMRequester } from "ssm";
import { useExtendedAuth } from "OptionnalKeycloakProvider";
import { BaseRouter } from "BaseRouter";

interface InitStoreProps {
  ssmList: Map<string, SSM>
  setSsmList: (ssmList: Map<string, SSM>) => void
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
    fetchSSMs(setSsmList)
  }, [auth?.keycloak.authenticated, auth?.service.getSSMInfo, setSsmList])


  const isLoading = () => {
    if (ssmList.size === 0) return true
    return false
  }

  if (isLoading()) return (
    <LoadingPage />
  )

  return (
    <BaseRouter />
  );
};

const fetchSSMs = async (setSsmList: (ssmList: Map<string, SSM>) => void) => {
  const ssmMap = new Map<string, SSM>()
  const ssms = await SSMRequester.fetchSSMs()
  if (defaultProtocols && defaultProtocols.length > 0) {
    ssms.forEach((ssm) => {
      if (defaultProtocols.includes(ssm.name)) {
        ssmMap.set(ssm.name, ssm)
      }
    })
  } else {
    ssms.forEach((ssm) => {
      ssmMap.set(ssm.name, ssm)
    })
  }
  setSsmList(ssmMap)
}
