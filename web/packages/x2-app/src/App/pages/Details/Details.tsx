import { Box } from "@material-ui/core";
import { NoMatchPage } from "@smartb/archetypes-ui-providers";
import { LoadingComponent, Page } from "components";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { SSM, Session, SessionState } from "ssm";
import { AsyncObject } from "utils";
import { DetailsCard } from "./components/DetailsCard";
import { HistoryCard } from "./components/HistoryCard";
import { InformationCard } from "./components/InformationCard";
import { ProtocolCard } from "./components/ProtocolCard";

interface DetailsProps {
  setTitle: (title: string) => void
  ssmList: Map<string, SSM>
  sessionsList: Map<string, AsyncObject<{ sessions?: Session[] }>>
  fetchSessions: (ssmName: string) => void
}

export const Details = (props: DetailsProps) => {
  const { setTitle, ssmList, fetchSessions, sessionsList } = props;
  const { t } = useTranslation()
  const { ssmName, sessionName } = useParams<{ ssmName: string, sessionName: string }>();
  const [transaction, setTransaction] = useState<SessionState | undefined>(undefined)

  const currentSSM = useMemo(() => {
    return ssmList.get(ssmName)
  }, [ssmName, sessionName, ssmList])

  const currentSessions = useMemo(() => {
    return sessionsList.get(ssmName)
  }, [ssmName, sessionsList])

  const currentSession = useMemo(() => {
    return currentSessions?.sessions?.find((session) => session.id === sessionName)
  }, [currentSessions, sessionName])

  useEffect(() => {
    fetchSessions(ssmName)
  }, [ssmName, fetchSessions])


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
        <ProtocolCard currentSSM={currentSSM} />
        <InformationCard currentSession={currentSession} />
      </CardContainer>
      <CardContainer>
        <HistoryCard currentSession={currentSession} onChangeTransaction={onChangeTransaction} />
        <DetailsCard transaction={transaction} />
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
