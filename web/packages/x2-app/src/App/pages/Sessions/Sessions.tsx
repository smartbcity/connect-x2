import { Box } from "@mui/material";
import { NoMatchPage } from "@smartb/g2-providers";
import { makeG2STyles } from "@smartb/g2-themes";
import { Page } from "components";
import { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {Session, SSM, SsmPath, SsmUriDTO, useParamsSsmUri, SSMRequester} from "ssm";
import { AsyncObject, useAsyncResponse } from "utils";
import { ProtocolCard } from "./components/ProtocolCard";
import { SessionNumberCard } from "./components/SessionNumberCard";
import { SessionsFilters } from "./components/SessionsFilters";
import { SessionTable } from "./components/SessionTable";
import { StepsCompletedCard } from "./components/StepsCompletedCard";

const useStyles = makeG2STyles()({
  container: {
    display: "flex",
    alignItems: "flex-start",
    overflow: 'auto',
    '@media (min-width:1500px)': {
      justifyContent: "space-around",
    },
    '@media (max-width:1000px)': {
      flexDirection: "column",
    }
  }
})

interface SessionsProps {
  setTitle: (title: string) => void
  gotoSessionDetails: (ssmUri: SsmUriDTO, sessionName: any) => void
  gotoSessions: (ssmUri: SsmUriDTO, params: Object) => void
  ssmList: Map<SsmPath, SSM>
  sessionsList: Map<SsmPath, AsyncObject<{ sessions?: Session[] }>>
  fetchSessions: (ssmUri: SsmUriDTO) => void
}

export const Sessions = (props: SessionsProps) => {
  const { setTitle, ssmList, gotoSessionDetails, gotoSessions, fetchSessions, sessionsList } = props;
  const { t } = useTranslation()
  const { classes } = useStyles()
  const ssmUri = useParamsSsmUri()
  const currentSSM = useMemo(() => ssmList.get(ssmUri.uri), [ssmList, ssmUri.uri])

  const currentSessions = useMemo(() => sessionsList.get(ssmUri.uri), [sessionsList, ssmUri.uri])

  const getSessionsPerStateStats = useCallback(
    (params?: SessionsFilters) => {
      return SSMRequester.fetchSessionStatesPerStates(
        ssmUri,
        params?.channel,
        params?.currentStep,
        params?.engine,
        params?.from,
        params?.to,
      )
    },
    [ssmUri.uri],
  )

  const getSessionStatePerInterval = useCallback(
    (params?: SessionsFilters) => {
      return SSMRequester.fetchSessionStatePerInterval(
        ssmUri,
        params?.channel,
        params?.currentStep,
        params?.engine,
        params?.from,
        params?.to,
      )
    },
    [ssmUri.uri],
  )

  const sessionsPerStateStats = useAsyncResponse(getSessionsPerStateStats)

  const stepsPerIntervalStats = useAsyncResponse(getSessionStatePerInterval)
  
  useEffect(() => {
    fetchSessions(ssmUri)
    sessionsPerStateStats.execute()
  }, [ssmUri.uri, fetchSessions])

  const onSubmitFilters = useCallback(
    (values: SessionsFilters) => {
      sessionsPerStateStats.execute(values)
      stepsPerIntervalStats.execute(values)
      gotoSessions(ssmUri, values)
    },
    [ssmUri.uri, sessionsPerStateStats.execute, stepsPerIntervalStats.execute],
  )
  
  if (!currentSSM) return <NoMatchPage />
  return (
    <Page
      setTitle={setTitle}
      title={t("sessions")}
      headerContent={<SessionsFilters ssmList={ssmList} onSubmit={onSubmitFilters} currentSSM={currentSSM} />}
    >
      <Box className={classes.container}>
        <StepsCompletedCard stats={stepsPerIntervalStats.result ?? []} isLoading={stepsPerIntervalStats.status !== "SUCCESS"} />
        <SessionNumberCard stats={sessionsPerStateStats.result ?? []} isLoading={sessionsPerStateStats.status !== "SUCCESS"} />
        <ProtocolCard ssmUri={ssmUri} currentSSM={currentSSM} />
      </Box>
      <SessionTable ssmUri={ssmUri} isLoading={currentSessions?.status === "PENDING"} sessions={currentSessions?.sessions} gotoSessionDetails={gotoSessionDetails} />
    </Page>
  );
};
