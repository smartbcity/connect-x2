import { Box, Typography } from "@material-ui/core";
import { Timeline } from "@smartb/archetypes-ui-components";
import { NoMatchPage } from "@smartb/archetypes-ui-providers";
import { highLevelStyles } from "@smartb/archetypes-ui-themes";
import { LoadingPage } from "components";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { useFetchTransactions } from "./components/useFetchTransactions";

const useStyles = highLevelStyles()({
  viewer: {
    width: "100%",
    height: "100%"
  },
  title: {
    color: "#808A9D",
    zIndex: 1,
  },
  timeline: {
    display: "block",
    flexGrow: 0,
    height: "max-content", 
    margin: 0,
    "& .MuiTimelineContent-root" : {
      padding: 0,
      paddingTop: "2px"
    },
    "& .AruiTimeLine-timeContainer" : {
      padding: 0,
      paddingTop: "3px"
    },
    "& .MuiTimelineSeparator-root": {
      maxWidth: "40px",
      minWidth: "40px"
    }
  }
})



interface TransactionHistoryProps {
}

export const TransactionHistory = (props: TransactionHistoryProps) => {
  const { } = props
  const { t } = useTranslation()
  const classes = useStyles()
  const { ssmName, sessionName } = useParams<{ ssmName: string, sessionName: string }>();

  const { result, status } = useFetchTransactions(ssmName, sessionName)

  if (status === "PENDING") return <LoadingPage />

  if (!result) return <NoMatchPage noGoBack />

  return (
    <Box display="flex" position="relative" width="100vw" height="100vh" alignItems="center" flexDirection="column">
      <Typography align="center" className={classes.title} variant="body1">{t("detailsPage.transactionsHistoryOf", { sessionName: sessionName })}</Typography>
      <Timeline
        className={classes.timeline}
        lines={result.lines}
        align="left"
        passedTimeLine
      />
    </Box>
  );
};
