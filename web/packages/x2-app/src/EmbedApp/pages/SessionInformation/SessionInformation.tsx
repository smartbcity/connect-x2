import { Box, Typography } from "@material-ui/core";
import { NoMatchPage } from "@smartb/archetypes-ui-providers";
import { highLevelStyles } from "@smartb/archetypes-ui-themes";
import { LoadingPage, SessionInformations } from "components";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { SSMRequester } from "ssm";
import { useAsyncResponse } from "utils";

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
}

export const SessionInformation = (props: SessionInformationProps) => {
  const { } = props;
  const { t } = useTranslation()
  const classes = useStyles()
  const { sessionName } = useParams<{ ssmName: string, sessionName: string }>();

  const fetchSession = useCallback(
    async () => {
      return SSMRequester.fetchSession(sessionName)
    },
    [sessionName],
  )

  const { result, status } = useAsyncResponse(fetchSession)

  if (status === "PENDING") return <LoadingPage />

  if (!result) return <NoMatchPage noGoBack/>

  return (
    <Box display="flex" flexDirection="column" alignItems="center" position="relative" width="100vw" height="100vh">
      <Typography align="center" className={classes.title} variant="body1">{t("detailsPage.sessionInformationsOf", { sessionName: result.id })}</Typography>
      <SessionInformations currentSession={result} minified />
    </Box>
  );
};
