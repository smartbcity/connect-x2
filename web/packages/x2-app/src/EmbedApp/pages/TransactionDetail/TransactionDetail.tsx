import { Box, Typography } from "@material-ui/core";
import { NoMatchPage } from "@smartb/archetypes-ui-providers";
import { highLevelStyles } from "@smartb/archetypes-ui-themes";
import { LoadingPage, TransactionDetails } from "components";
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

export const TransactionDetail = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const { sessionName, transactionId } = useParams<{ ssmName: string, sessionName: string, transactionId: string }>();

  const fetchSession = useCallback(
    async () => {
      return SSMRequester.fetchSessionState(sessionName, transactionId)
    },
    [sessionName],
  )

  const { result, status } = useAsyncResponse(fetchSession)


  if (status === "PENDING") return <LoadingPage />
  if (!result) return <NoMatchPage noGoBack/>

  return (
    <Box display="flex" flexDirection="column" alignItems="center" position="relative" width="100vw" height="100vh">
      <Typography align="center" className={classes.title} variant="body1">{t("transactionDetails")}</Typography>
      <TransactionDetails transaction={result} minified  />
    </Box>
  );
};
