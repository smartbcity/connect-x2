import { Box } from "@mui/material";
import { NoMatchPage } from "@smartb/g2-providers";
import { makeG2STyles } from "@smartb/g2-themes";
import { Page } from "components";
import { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Session,
  SsmPath,
  SsmUriDTO,
  SSMRequester,
  ProtocolName,
  Protocol,
  useParamsProtocols
} from "ssm";
import { AsyncObject, useAsyncResponse } from "utils";
import { ProtocolCard } from "./components/ProtocolCard";
import { SessionNumberCard } from "./components/SessionNumberCard";
import { SessionsFilters } from "./components/SessionsFilters";
import { SessionTable } from "./components/SessionTable";
import { StepsCompletedCard } from "./components/StepsCompletedCard";
import {GotoSessionDetails, GotoSessions} from "../../../store/router/router.goto";
import {FetchSessionAction, FetchSsmAction} from "../../../store/ssm/ssm.actions";

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
  gotoSessionDetails: GotoSessionDetails
  gotoSessions: GotoSessions
  protocols: Map<ProtocolName, Protocol>
  sessionsList: Map<SsmPath, AsyncObject<{ sessions?: Session[] }>>
  fetchSessions: FetchSessionAction
}

export const Sessions = (props: SessionsProps) => {
  const { setTitle, protocols, gotoSessionDetails, gotoSessions, fetchSessions, sessionsList } = props;
  const { t } = useTranslation()
  const { classes } = useStyles()
  const protocolName = useParamsProtocols()
  const currentProtocol = useMemo(() => protocols.get(protocolName), [protocols, protocolName])

  const currentSessions = useMemo(() => sessionsList.get(protocolName), [sessionsList, protocolName])

  const getSessionsPerStateStats = useCallback(
    (params?: SessionsFilters) => {
      return SSMRequester.fetchSessionStatesPerStates(
          protocolName,
        params?.ssmUri,
        params?.channel,
        params?.currentStep,
        params?.engine,
        params?.from,
        params?.to,
      )
    },
    [protocolName],
  )

  const getSessionStatePerInterval = useCallback(
    (params?: SessionsFilters) => {
      return SSMRequester.fetchSessionStatePerInterval(
          protocolName,
          params?.ssmUri,
        params?.channel,
        params?.currentStep,
        params?.engine,
        params?.from,
        params?.to,
      )
    },
    [],
  )

  const sessionsPerStateStats = useAsyncResponse(getSessionsPerStateStats)

  const stepsPerIntervalStats = useAsyncResponse(getSessionStatePerInterval)
  
  useEffect(() => {
    fetchSessions(protocolName)
    sessionsPerStateStats.execute()
  }, [protocolName, fetchSessions])

  const onSubmitFilters = useCallback(
    (values: SessionsFilters) => {
      sessionsPerStateStats.execute(values)
      stepsPerIntervalStats.execute(values)
      gotoSessions(protocolName, values)
    },
    [protocolName, sessionsPerStateStats.execute, stepsPerIntervalStats.execute],
  )
  
  if (!currentProtocol) return <NoMatchPage />
  return (
    <Page
      setTitle={setTitle}
      title={t("sessions")}
      headerContent={<SessionsFilters protocol={currentProtocol} onSubmit={onSubmitFilters} />}
    >
      <Box className={classes.container}>
        <StepsCompletedCard stats={stepsPerIntervalStats.result ?? []} isLoading={stepsPerIntervalStats.status !== "SUCCESS"} />
        <SessionNumberCard stats={sessionsPerStateStats.result ?? []} isLoading={sessionsPerStateStats.status !== "SUCCESS"} />
        <ProtocolCard protocol={currentProtocol} />
      </Box>
      <SessionTable
          isLoading={currentSessions?.status === "PENDING"}
          protocolName={protocolName}
          sessions={currentSessions?.sessions}
          gotoSessionDetails={gotoSessionDetails} />
    </Page>
  );
};
