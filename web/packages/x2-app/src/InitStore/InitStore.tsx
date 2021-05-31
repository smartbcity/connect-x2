import { useEffect } from "react";
import { defaultProtocols, SSM } from "ssm";
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
    fetchSSMs(auth?.keycloak, setSsmList)
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

const fetchSSMs = (keycloak: any, setSsmList: (ssmList: Map<string, SSM>) => void) => {
  SSMRequester.fetchSessions().then(async (sessions) => {
    const ssmMap = new Map<string, SSM>()
    if (keycloak && keycloak.authenticated) {
      const ssms = await SSMRequester.fetchSSMs()
      ssms.forEach(async (ssm) => {
        const fetched = await SSMRequester.fetchSSM(ssm.name, sessions)
        if (fetched) {
          ssmMap.set(fetched.name, fetched)
        }
      })
    } else {
      for (let index = 0; index < sessions.length; index++) {
        const session = sessions[index];
        if (defaultProtocols.length == 0 || defaultProtocols.find(it => it == session.ssm) != null) {
          const fetched = await SSMRequester.fetchSSM(session.ssm, sessions)
          if (fetched) {
            ssmMap.set(fetched.name, fetched)
          }
        }
      }
    }
    setSsmList(ssmMap)
  })
}
