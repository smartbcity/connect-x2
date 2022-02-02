import { Box } from "@mui/material";
import { NoMatchPage } from "@smartb/g2-providers";
import { LoadingComponent, Page } from "components";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import {SSM, Session, SessionState, useParamsSsmUri, SsmUriDTO, SsmPath} from "ssm";
import { AsyncObject } from "utils";
import { DetailsCard } from "./components/DetailsCard";
import { HistoryCard } from "./components/HistoryCard";
import { InformationCard } from "./components/InformationCard";
import { ProtocolCard } from "./components/ProtocolCard";

interface DetailsProps {
  setTitle: (title: string) => void
  ssmList: Map<SsmPath, SSM>
  sessionsList: Map<SsmPath, AsyncObject<{ sessions?: Session[] }>>
  fetchSessions: (uri: SsmUriDTO) => void
}

export const Details = (props: DetailsProps) => {
  const { setTitle, ssmList, fetchSessions, sessionsList } = props;
  const { t } = useTranslation()
  const ssmUri = useParamsSsmUri()
  const { sessionName } = useParams<{ sessionName: string }>();
  const [transaction, setTransaction] = useState<SessionState | undefined>(undefined)

  const currentSSM = useMemo(() => {
    return ssmList.get(ssmUri.uri)
  }, [ssmUri.uri, sessionName, ssmList])

  const currentSessions = useMemo(() => {
    return sessionsList.get(ssmUri.uri)
  }, [sessionName, sessionsList])

  const currentSession = useMemo(() => {
    return currentSessions?.sessions?.find((session) => session.sessionName === sessionName)
  }, [currentSessions, sessionName])

  useEffect(() => {
    fetchSessions(ssmUri)
  }, [currentSSM, fetchSessions])


  const onChangeTransaction = useCallback(
    (transaction?: SessionState) => setTransaction(transaction),
    [],
  )

  if (currentSessions?.status === "PENDING") return <Box marginTop="50px"><LoadingComponent /></Box>
  if (!currentSession || !currentSSM) return <NoMatchPage />
  return (
    <Page
      setTitle={setTitle}
      title={t("sessionsDetails")}
    >
      <CardContainer>
        <ProtocolCard ssmUri={currentSSM.uri} currentSSM={currentSSM} />
        <InformationCard ssmUri={currentSSM.uri} currentSession={currentSession} />
      </CardContainer>
      <CardContainer>
        <HistoryCard ssmUri={currentSSM.uri} currentSession={currentSession} onChangeTransaction={onChangeTransaction} />
        <DetailsCard ssmUri={currentSSM.uri} transaction={transaction} />
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
