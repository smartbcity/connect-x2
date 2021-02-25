import { Page } from "components";
import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";

interface DetailsProps {
  setTitle: (title: string) => void
}

export const Details = (props: DetailsProps) => {
  const {setTitle} = props;
  const {t} = useTranslation()
  return (
  <Page
    setTitle={setTitle}
    title={t("Details")}
  >
      <Typography>Je suis les détails</Typography>
  </Page>
  );
};
