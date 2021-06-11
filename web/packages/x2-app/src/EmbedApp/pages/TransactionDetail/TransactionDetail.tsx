import { Box, Typography } from "@material-ui/core";
import { NoMatchPage } from "@smartb/archetypes-ui-providers";
import { highLevelStyles } from "@smartb/archetypes-ui-themes";
import { TransactionDetails } from "components";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

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
  const { } = useParams<{ ssmName: string, sessionName: string, transactionId: string }>();

  return <NoMatchPage noGoBack/>

  return (
    <Box display="flex" flexDirection="column" alignItems="center" position="relative" width="100vw" height="100vh">
      <Typography align="center" className={classes.title} variant="body1">{t("transactionDetails")}</Typography>
      <TransactionDetails transaction={transaction} minified  />
    </Box>
  );
};
