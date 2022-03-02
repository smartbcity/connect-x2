import {Box} from "@mui/material";
import {LoadingComponent, Page} from "components";
import React, {useCallback, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Session, SessionName, SessionState, SSM, SsmUriDTO, useParamsSessionName, useParamsSsmUri} from "ssm";
import {AsyncObject} from "utils";
import {DetailsCard} from "./components/DetailsCard";
import {HistoryCard} from "./components/HistoryCard";
import {InformationCard} from "./components/InformationCard";
import {ProtocolCard} from "./components/ProtocolCard";

interface DetailsProps {
  setTitle: (title: string) => void
  ssm?: AsyncObject<{ ssm?: SSM }>
  session?: AsyncObject<{ session?: Session }>
  fetchSsm: (ssmUri: SsmUriDTO) => void
  fetchSession: (ssmUri: SsmUriDTO, sessionName: SessionName) => void
}

export const Details = (props: DetailsProps) => {
  const { setTitle, ssm, session, fetchSsm, fetchSession } = props;
  const { t } = useTranslation()
  const ssmUri = useParamsSsmUri()
  const sessionName = useParamsSessionName()
  const [transaction, setTransaction] = useState<SessionState | undefined>(undefined)

  useEffect(() => {
    fetchSsm(ssmUri)
    fetchSession(ssmUri, sessionName)
  }, [ssmUri.uri, sessionName])


  const onChangeTransaction = useCallback(
    (transaction?: SessionState) => setTransaction(transaction),
    [],
  )

  if (session?.status !== "SUCCESS") return <Box marginTop="50px"><LoadingComponent /></Box>
  if (ssm?.status !== "SUCCESS") return <Box marginTop="50px"><LoadingComponent /></Box>

  const currentSession = session?.session!!
  const currentSsm = ssm?.ssm!!
  return (
    <Page
      setTitle={setTitle}
      title={t("sessionsDetails")}
    >
      <CardContainer>
        <ProtocolCard ssmUri={ssmUri} currentSSM={currentSsm} />
        <InformationCard ssmUri={ssmUri} currentSession={currentSession} />
      </CardContainer>
      <CardContainer>
        <HistoryCard ssmUri={ssmUri} currentSession={currentSession} onChangeTransaction={onChangeTransaction} />
        <DetailsCard ssmUri={ssmUri} transaction={transaction} />
      </CardContainer>
    </Page>
  );
};

interface CardContainerProps {
  children?: React.ReactNode
}

const CardContainer = (props: CardContainerProps) => {
  const { children } = props

  return (
    <Box display="flex" justifyContent="space-around" flexWrap="wrap">
      {children}
    </Box>
  )
}
