import { useEffect } from "react";
import {protocols, SSM} from "ssm";
import App from "App";
import { LoadingPage } from "components";
import { SSMRequester } from "ssm";

interface InitStoreProps {
  ssmList: Map<string, SSM>
  setSsmList: (ssmList: Map<string, SSM>) => void
}

export const InitStore = (props: InitStoreProps) => {
  const { ssmList, setSsmList } = props;

  useEffect(() => {
    SSMRequester.fetchSessions().then(async (sessions) => {
      console.log(sessions)
      const ssmMap = new Map<string, SSM>()

      for (let index = 0; index < sessions.length; index++) {
        const session = sessions[index];
        if( protocols.length == 0 || protocols.find(it => it == session.ssm) != null) {
            const fetched = await SSMRequester.fetchSSM(session.ssm, sessions)
            if (fetched) {
                ssmMap.set(fetched.name, fetched)
            }
        }
      }


      // const accoutSSM =  await SSMRequester.fetchSSM("account", sessions)
      // if (accoutSSM) {
      //   ssmMap.set(accoutSSM.name, accoutSSM)
      // }
      //
      // const deliverySSM =  await SSMRequester.fetchSSM("Delivery", sessions)
      // if (deliverySSM) {
      //   ssmMap.set(deliverySSM.name, deliverySSM)
      // }
      //
      // const MobilityImpactSsm =  await SSMRequester.fetchSSM("MobilityImpactSsm", sessions)
      // if (MobilityImpactSsm) {
      //   ssmMap.set(MobilityImpactSsm.name, MobilityImpactSsm)
      // }
      //
      // const Negociation =  await SSMRequester.fetchSSM("Negociation", sessions)
      // if (Negociation) {
      //   ssmMap.set(Negociation.name, Negociation)
      // }

      setSsmList(ssmMap)
    })

  }, [])


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
