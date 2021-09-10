import { Box } from "@material-ui/core";
import { NoMatchPage } from "@smartb/g2-providers";
import { highLevelStyles } from "@smartb/g2-themes";
import { Page } from "components";
import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { Session, SSM } from "ssm";
import { AsyncObject } from "utils";
import { ProtocolCard } from "./components/ProtocolCard";
import { SessionNumberCard } from "./components/SessionNumberCard";
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
  gotoSessionDetails: (ssmName: string, sessionName: any) => void
  ssmList: Map<string, SSM>
  sessionsList: Map<string, AsyncObject<{ sessions?: Session[] }>>
  fetchSessions: (ssmName: string) => void
}

export const Sessions = (props: SessionsProps) => {
  const { setTitle, ssmList, gotoSessionDetails, fetchSessions, sessionsList } = props;
  const { t } = useTranslation()
  const { ssmName } = useParams<{ ssmName: string }>();
  const classes = useStyles()

  const currentSSM = useMemo(() => ssmList.get(ssmName), [ssmList, ssmName])

  const currentSessions = useMemo(() => sessionsList.get(ssmName), [sessionsList, ssmName])

  useEffect(() => {
    fetchSessions(ssmName)
  }, [ssmName, fetchSessions])


  if (!currentSSM) return <NoMatchPage />
  return (
    <Page
      setTitle={setTitle}
      title={t("sessions")}
    >
      <Box className={classes.container}>
        <StepsCompletedCard />
        <SessionNumberCard />
        <ProtocolCard currentSSM={currentSSM} />
      </Box>
      <SessionTable isLoading={currentSessions?.status === "PENDING"} sessions={currentSessions?.sessions} gotoSessionDetails={gotoSessionDetails} />
    </Page>
  );
};
