import {Box, Typography} from "@mui/material";
import {NoMatchPage} from "@smartb/g2-providers";
import {AutomateViewer} from "@smartb/g2-s2";
import {makeG2STyles} from "@smartb/g2-themes";
import {LoadingPage} from "components";
import {useMemo} from "react";
import {useTranslation} from "react-i18next";
import {Transition, useFetchSsm, useParamsSsmUri} from "ssm";

const useStyles = makeG2STyles()({
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
  }
})

interface ProtocolDiagramProps {
}



export const ProtocolDiagram = (props: ProtocolDiagramProps) => {
  const { } = props;
  const { t } = useTranslation()
  const { classes } = useStyles()
  const ssmUri  = useParamsSsmUri()

  const {result, status} = useFetchSsm(ssmUri);

  const transitions = useMemo(() => result ? result.ssm.transitions.map((transition: Transition) => ({...transition, label: `${transition.role}: ${transition.action}`})) : [], [result])

  if (status === "PENDING") return <LoadingPage />

  if (!result) return <NoMatchPage noGoBack/>

  return (
    <Box position="relative" width="100vw" height="100vh">
      <Typography className={classes.title} variant="body1">{t("protocolDiagramOf", {ssmName: result.ssm.name})}</Typography>
      <AutomateViewer transitions={transitions} className={classes.viewer}/>
    </Box>
  );
};