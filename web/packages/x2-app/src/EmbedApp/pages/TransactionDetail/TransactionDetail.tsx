import { Box, Typography } from "@material-ui/core";
import { highLevelStyles } from "@smartb/archetypes-ui-themes";
import { LoadingComponent, TransactionDetails } from "components";
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
  const { sessionName, transactionId } = useParams<{ ssmName: string, sessionName: string, transactionId: string }>();
  const transaction = useFetchTransaction(sessionName, transactionId)

  if (!currentLog) return <LoadingComponent />

  return (
    <Box display="flex" flexDirection="column" alignItems="center" position="relative" width="100vw" height="100vh">
      <Typography align="center" className={classes.title} variant="body1">{t("transactionDetails")}</Typography>
      <TransactionDetails transaction={transaction} minified  />
    </Box>
  );
};

export const useFetchTransaction = (sessionName: string, transactionId: string) => {
  const getLines = useCallback(
      async () => {
          const transactions = await SSMRequester.fetchTransactions(sessionName)
          if (!transactions) return undefined
          const transaction = transactions.find((transaction) => transactionId === transaction.id)
          return transaction
      },
      [sessionName]
  )
  const { result } = useAsync(getLines)

  return result
}
