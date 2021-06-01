import { Box, Typography } from "@material-ui/core";
import { NoMatchPage } from "@smartb/archetypes-ui-providers";
import { highLevelStyles } from "@smartb/archetypes-ui-themes";
import { TransactionDetails } from "components";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { SSMRequester } from "ssm";
import { useAsync } from "utils";

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
  const { sessionName, logId } = useParams<{ ssmName: string, sessionName: string, logId: string }>();
  const currentLog = useFetchLog(sessionName, logId)

  if (!currentLog) return <NoMatchPage />

  return (
    <Box position="relative" width="100vw" height="100vh">
      <Typography align="center" className={classes.title} variant="body1">{t("transactionDetails")}</Typography>
      <TransactionDetails currentLog={currentLog} minified  />
    </Box>
  );
};

export const useFetchLog = (sessionName: string, logId: string) => {
  const getLines = useCallback(
      async () => {
          const logs = await SSMRequester.fetchSessionLogs(sessionName)
          if (!logs) return undefined
          const log = logs.find((log) => logId === log.txId)
          return log
      },
      [sessionName]
  )
  const { result } = useAsync(getLines)

  return result
}
