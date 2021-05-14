import { Box } from "@material-ui/core";
import { highLevelStyles } from "@smartb/archetypes-ui-themes";
import { Page } from "components";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { SSM } from "ssm";
import { ProtocolCard } from "./components/ProtocolCard";
import { SessionNumberCard } from "./components/SessionNumberCard";
import { SessionTable } from "./components/SessionTable";
import { StepsCompletedCard } from "./components/StepsCompletedCard";

const useStyles = highLevelStyles()({
  container: {
    display: "flex",
    alignItems: "flex-start",
    overflow:'auto',
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
}

export const Sessions = (props: SessionsProps) => {
  const { setTitle, ssmList, gotoSessionDetails } = props;
  const { t } = useTranslation()
  const { ssmName } = useParams<{ ssmName: string }>();
  const classes = useStyles()
  const currentSSM = useMemo(() => ssmList.get(ssmName), [ssmList, ssmName])


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
      <SessionTable gotoSessionDetails={gotoSessionDetails} currentSSM={currentSSM} />
    </Page>
  );
};
