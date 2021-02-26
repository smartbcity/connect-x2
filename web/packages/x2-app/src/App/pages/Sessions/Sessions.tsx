import { Page } from "components";
import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";

interface SessionsProps {
  setTitle: (title: string) => void
}

export const Sessions = (props: SessionsProps) => {
  const {setTitle} = props;
  const {t} = useTranslation()
  return (
  <Page
    setTitle={setTitle}
    title={t("sessions")}
  >
      <Typography>Je suis la session</Typography>
  </Page>
  );
};
