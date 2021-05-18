import { useEffect } from "react";
import { defaultProtocols, SSM } from "ssm";
import App from "App";
import { LoadingPage } from "components";
import { SSMRequester } from "ssm";
import { useExtendedAuth } from "OptionnalKeycloakProvider";

interface InitStoreProps {
  ssmList: Map<string, SSM>
  setSsmList: (ssmList: Map<string, SSM>) => void
}

export const InitStore = (props: InitStoreProps) => {
  const { ssmList, setSsmList } = props;

  const { keycloak, service } = useExtendedAuth()

  useEffect(() => {
    if (keycloak.authenticated) {
      //@ts-ignore
      window.token = keycloak.token
      //@ts-ignore
      window._env_.COOP_URL = service.getSSMInfo().url
    }
    fetchSSMs(keycloak, setSsmList)
  }, [keycloak.authenticated, service.getSSMInfo, setSsmList])


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

const fetchSSMs = (keycloak: any, setSsmList: (ssmList: Map<string, SSM>) => void) => {
  SSMRequester.fetchSessions().then(async (sessions) => {
    const ssmMap = new Map<string, SSM>()
    if (!keycloak.authenticated) {
      for (let index = 0; index < sessions.length; index++) {
        const session = sessions[index];
        if (defaultProtocols.length == 0 || defaultProtocols.find(it => it == session.ssm) != null) {
          const fetched = await SSMRequester.fetchSSM(session.ssm, sessions)
          if (fetched) {
            ssmMap.set(fetched.name, fetched)
          }
        }
      }
    } else {
      const ssms = await SSMRequester.fetchSSMs()
      ssms.forEach(async (ssm) => {
        const fetched = await SSMRequester.fetchSSM(ssm.name, sessions)
        if (fetched) {
          ssmMap.set(fetched.name, fetched)
        }
      })
    }
    setSsmList(ssmMap)
  })
}
