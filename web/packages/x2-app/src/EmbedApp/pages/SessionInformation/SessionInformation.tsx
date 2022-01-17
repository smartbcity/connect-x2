import {Box, Typography} from "@material-ui/core";
import {NoMatchPage} from "@smartb/g2-providers";
import {highLevelStyles} from "@smartb/g2-themes";
import {LoadingPage, SessionInformations} from "components";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router";
import {useFetchSsmSession} from "ssm";

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
  const { sessionName, ssmName } = useParams<{ ssmName: string, sessionName: string }>();

  const {result, status} = useFetchSsmSession({uri: ssmName}, sessionName);

  if (status === "PENDING") return <LoadingPage />

  if (!result) return <NoMatchPage noGoBack/>

  return (
    <Box display="flex" flexDirection="column" alignItems="center" position="relative" width="100vw" height="100vh">
      <Typography align="center" className={classes.title} variant="body1">{t("detailsPage.sessionInformationsOf", { sessionName: result.sessionName })}</Typography>
      <SessionInformations currentSession={result} minified />
    </Box>
  );
};
