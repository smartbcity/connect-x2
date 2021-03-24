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
    SSMRequester.fetchSSMs().then((ssmList: SSM[]) => {
      const ssmMap: [string, SSM][] = ssmList.map(
        (ssm) => ([ssm.name, ssm]))
      setSsmList(new Map(ssmMap))
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
