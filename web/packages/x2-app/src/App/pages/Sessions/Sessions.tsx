import { Box } from "@material-ui/core";
import { NoMatchPage } from "@smartb/g2-providers";
import { highLevelStyles } from "@smartb/g2-themes";
import { Page } from "components";
import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {Session, SSM, SsmPath, SsmUriDTO, useParamsSsmUri} from "ssm";
import { AsyncObject } from "utils";
import { ProtocolCard } from "./components/ProtocolCard";
import { SessionNumberCard } from "./components/SessionNumberCard";
import { SessionsFilters } from "./components/SessionsFilters";
import { SessionTable } from "./components/SessionTable";
import { StepsCompletedCard } from "./components/StepsCompletedCard";

const useStyles = highLevelStyles()({
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
  const classes = useStyles()
  const ssmUri = useParamsSsmUri()
  const currentSSM = useMemo(() => ssmList.get(ssmUri.uri), [ssmList, ssmUri.uri])

  const currentSessions = useMemo(() => sessionsList.get(ssmUri.uri), [sessionsList, ssmUri.uri])

  useEffect(() => {
    fetchSessions(ssmUri)
  }, [ssmUri.uri, fetchSessions])


  if (!currentSSM) return <NoMatchPage />
  return (
    <Page
      setTitle={setTitle}
      title={t("sessions")}
      headerContent={<SessionsFilters ssmUri={ssmUri} gotoSessions={gotoSessions} />}
    >
      <Box className={classes.container}>
        <StepsCompletedCard />
        <SessionNumberCard />
        <ProtocolCard currentSSM={currentSSM} />
      </Box>
      <SessionTable ssmUri={ssmUri} isLoading={currentSessions?.status === "PENDING"} sessions={currentSessions?.sessions} gotoSessionDetails={gotoSessionDetails} />
    </Page>
  );
};
