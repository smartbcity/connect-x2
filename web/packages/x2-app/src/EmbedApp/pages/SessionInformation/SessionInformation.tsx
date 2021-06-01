import { Box, Typography } from "@material-ui/core";
import { NoMatchPage } from "@smartb/archetypes-ui-providers";
import { highLevelStyles } from "@smartb/archetypes-ui-themes";
import { SessionInformations } from "components";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { Session, SSM } from "ssm";

const useStyles = highLevelStyles()({
  viewer: {
    width: "100%",
    height: "100%"
  },
  title: {
    color: "#808A9D",
    zIndex: 1,
  }
})

interface SessionInformationProps {
  ssmList: Map<string, SSM>
}

export const SessionInformation = (props: SessionInformationProps) => {
  const { ssmList } = props;
  const { t } = useTranslation()
  const classes = useStyles()
  const { ssmName, sessionName } = useParams<{ ssmName: string, sessionName: string }>();
  const currentSession: Session | undefined = useMemo(() => {
    const ssm = ssmList.get(ssmName)
    const session = ssm?.sessions.find((session) => session.session === sessionName)
    return session
  }, [ssmName, sessionName, ssmList])

  if (!currentSession) return <NoMatchPage />

  return (
    <Box display="flex" flexDirection="column" alignItems="center" position="relative" width="100vw" height="100vh">
      <Typography align="center" className={classes.title} variant="body1">{t("detailsPage.sessionInformationsOf", {sessionName: currentSession.session})}</Typography>
      <SessionInformations currentSession={currentSession} minified  />
    </Box>
  );
};
