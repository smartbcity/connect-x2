import { Box } from "@material-ui/core";
import { Page } from "components";
import { useTranslation } from "react-i18next";
import { DetailsCard } from "./components/DetailsCard";
import { HistoryCard } from "./components/HistoryCard";
import { InformationCard } from "./components/InformationCard";
import { ProtocolCard } from "./components/ProtocolCard";

interface DetailsProps {
  setTitle: (title: string) => void
}

export const Details = (props: DetailsProps) => {
  const { setTitle } = props;
  const { t } = useTranslation()
  return (
    <Page
      setTitle={setTitle}
      title={t("Details")}
    >
      <Box display="flex" justifyContent="space-around" flexWrap="wrap">
        <ProtocolCard />
        <InformationCard />
      </Box>
      <Box display="flex" justifyContent="space-around" flexWrap="wrap">
        <HistoryCard />
        <DetailsCard />
      </Box>
    </Page>
  );
};
