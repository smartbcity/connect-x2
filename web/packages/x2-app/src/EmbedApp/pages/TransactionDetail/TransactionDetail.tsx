import {Box, Typography} from "@mui/material";
import {NoMatchPage} from "@smartb/g2-providers";
import {makeG2STyles} from "@smartb/g2-themes";
import {LoadingPage, TransactionDetails} from "components";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router";
import {useFetchSsmSessionState, useParamsSsmUri} from "ssm";

const useStyles = makeG2STyles()({
  viewer: {
    width: "100%",
    height: "100%"
  },
  title: {
    color: "#808A9D",
    zIndex: 1,
  }
})

interface TransactionDetailProps {
}

export const TransactionDetail = (_: TransactionDetailProps) => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const { sessionName, transactionId } = useParams<{ sessionName: string, transactionId: string }>();
  const ssmUri = useParamsSsmUri()
  const {result, status} = useFetchSsmSessionState(ssmUri, sessionName, transactionId);

  if (status === "PENDING") return <LoadingPage />
  if (!result) return <NoMatchPage noGoBack/>

  return (
    <Box display="flex" flexDirection="column" alignItems="center" position="relative" width="100vw" height="100vh">
      <Typography align="center" className={classes.title} variant="body1">{t("transactionDetails")}</Typography>
      <TransactionDetails transaction={result} minified  />
    </Box>
  );
};
