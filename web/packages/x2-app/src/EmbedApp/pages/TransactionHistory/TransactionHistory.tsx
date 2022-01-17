import { Box, Typography } from "@material-ui/core";
import { Timeline } from "@smartb/g2-components";
import { NoMatchPage } from "@smartb/g2-providers";
import { highLevelStyles } from "@smartb/g2-themes";
import { CertificatPopUp, LoadingPage, toTimeLineCells } from "components";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { SessionState, useFetchTransactions } from "ssm";

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
    "& .MuiTimelineContent-root": {
      padding: 0,
      paddingTop: "2px"
    },
    "& .AruiTimeLine-timeContainer": {
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

  const [sessionStatePdf, setSessionStatePdf] = useState<SessionState | undefined>(undefined)
  const onGenerate = useCallback(
    (sessionState: SessionState) => setSessionStatePdf(sessionState),
    [],
  )
  const onClosePopUp = useCallback(
    () => setSessionStatePdf(undefined),
    [],
  )

  const { result, status } = useFetchTransactions({uri: ssmName}, sessionName)

  const timeLineCells = useMemo(() => result ? toTimeLineCells(result.sessionStates, result.canGenerateCertificates, onGenerate, true) : undefined, [result])

  if (status === "PENDING") return <LoadingPage />

  if (!timeLineCells) return <NoMatchPage noGoBack />

  return (
    <Box display="flex" position="relative" width="100vw" height="100vh" alignItems="center" flexDirection="column">
      <Typography align="center" className={classes.title} variant="body1">{t("detailsPage.transactionsHistoryOf", { sessionName: sessionName })}</Typography>
      <Timeline
        className={classes.timeline}
        lines={timeLineCells}
        align="left"
        passedTimeLine
      />
      {sessionStatePdf && <CertificatPopUp currentSessionState={sessionStatePdf} onClose={onClosePopUp} open={!!sessionStatePdf} />}
    </Box>
  );
};
