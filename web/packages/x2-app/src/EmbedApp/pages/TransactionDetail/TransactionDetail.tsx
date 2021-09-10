import {Box, Typography} from "@material-ui/core";
import {NoMatchPage} from "@smartb/g2-providers";
import {highLevelStyles} from "@smartb/g2-themes";
import {LoadingPage, TransactionDetails} from "components";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router";
import {useFetchSsmSessionState} from "ssm";

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
  const { sessionName, transactionId, ssmName } = useParams<{ ssmName: string, sessionName: string, transactionId: string }>();
  const {result, status} = useFetchSsmSessionState(ssmName, sessionName, transactionId);

  if (status === "PENDING") return <LoadingPage />
  if (!result) return <NoMatchPage noGoBack/>

  return (
    <Box display="flex" flexDirection="column" alignItems="center" position="relative" width="100vw" height="100vh">
      <Typography align="center" className={classes.title} variant="body1">{t("transactionDetails")}</Typography>
      <TransactionDetails transaction={result} minified  />
    </Box>
  );
};
