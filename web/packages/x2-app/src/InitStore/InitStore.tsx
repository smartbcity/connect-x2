import { useEffect } from "react";
import { SSM } from "ssm";
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
      const ssmMap = new Map<string, SSM>()
      const accoutSSM =  await SSMRequester.fetchSSM("account", sessions)
      if (accoutSSM) {
        ssmMap.set(accoutSSM.name, accoutSSM)
      }

      const deliverySSM =  await SSMRequester.fetchSSM("Delivery", sessions)
      if (deliverySSM) {
        ssmMap.set(deliverySSM.name, deliverySSM)
      }

      const MobilityImpactSsm =  await SSMRequester.fetchSSM("MobilityImpactSsm", sessions)
      if (MobilityImpactSsm) {
        ssmMap.set(MobilityImpactSsm.name, MobilityImpactSsm)
      }

      const Negociation =  await SSMRequester.fetchSSM("Negociation", sessions)
      if (Negociation) {
        ssmMap.set(Negociation.name, Negociation)
      }

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
