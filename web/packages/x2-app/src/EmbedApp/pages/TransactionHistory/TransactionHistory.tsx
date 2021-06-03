import { Box, Typography } from "@material-ui/core";
import { Timeline } from "@smartb/archetypes-ui-components";
import { NoMatchPage } from "@smartb/archetypes-ui-providers";
import { AutomateViewer } from "@smartb/archetypes-ui-s2";
import { highLevelStyles } from "@smartb/archetypes-ui-themes";
import { LoadingComponent } from "components";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { SSM, SSMRequester, Transition } from "ssm";
import { useAsync } from "utils";
import { useFetchTransactions } from "./components/useFetchTransactions";

const useStyles = highLevelStyles()({
  viewer: {
    width: "100%",
    height: "100%"
  },
  title: {
    position: "absolute",
    color: "#808A9D",
    zIndex: 1,
    top: 10,
    left: 10
  },
  timeline: {
      display: "block",
      flexGrow: 0,
      height:"max-content"
  }
})



interface TransactionHistoryProps {
  ssmList: Map<string, SSM>
}

export const TransactionHistory = (props: TransactionHistoryProps) => {
  const { ssmList } = props;
  const { t } = useTranslation()
  const classes = useStyles()
  const { ssmName } = useParams<{ ssmName: string }>();
  const currentSSM = useMemo(() => ssmList.get(ssmName), [ssmList, ssmName])
  const fetchSSMSessions = useCallback(
    async () => {
      return SSMRequester.fetchSessions(currentSSM?.name)
    },
    [currentSSM],
  )

  const sessions = useAsync(fetchSSMSessions)

  const transactions = useFetchTransactions(sessions.result)

  if (!currentSSM) return <NoMatchPage />

  return (
    <Box display="flex" position="relative" width="100vw" height="100vh" alignItems="center" flexDirection="column">
      <Typography className={classes.title} variant="body1">{t("detailsPage.transactionsHistoryOf", {sessionName: "test"})}</Typography>
      {!transactions ?
                <LoadingComponent />
                :
                <Timeline
                    className={classes.timeline}
                    lines={transactions.lines}
                    align="left"
                    passedTimeLine
                />
            }
    </Box>
  );
};
