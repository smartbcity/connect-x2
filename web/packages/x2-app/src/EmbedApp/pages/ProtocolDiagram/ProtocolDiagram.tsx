import { Box, Typography } from "@material-ui/core";
import { NoMatchPage } from "@smartb/archetypes-ui-providers";
import { AutomateViewer } from "@smartb/archetypes-ui-s2";
import { highLevelStyles } from "@smartb/archetypes-ui-themes";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { SSM } from "ssm";

const useStyles = highLevelStyles()({
  viewer: {
    width: "100%",
    height: "100%"
  },
  title: {
    position: "absolute",
    color: "#676879",
    zIndex: 1,
    top: 10,
    left: 10
  }
})

interface ProtocolDiagramProps {
  ssmList: Map<string, SSM>
}

export const ProtocolDiagram = (props: ProtocolDiagramProps) => {
  const { ssmList } = props;
  const { t } = useTranslation()
  const classes = useStyles()
  const { ssmName } = useParams<{ ssmName: string }>();
  const currentSSM = useMemo(() => ssmList.get(ssmName), [ssmList, ssmName])
  const transitions = useMemo(() => currentSSM ? currentSSM.transitions.map((transition) => ({...transition, label: `${transition.role}: ${transition.action}`})) : [], [currentSSM])

  if (!currentSSM) return <NoMatchPage />

  return (
    <Box position="relative" width="100vw" height="100vh">
      <Typography className={classes.title} variant="body1">{t("protocolDiagramOf", {ssmName: currentSSM.name})}</Typography>
      <AutomateViewer transitions={transitions} className={classes.viewer}/>
    </Box>
  );
};
