import { Page } from "components";
import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";

interface DashboardProps {
    setTitle: (title: string) => void
}

export const Dashboard = (props: DashboardProps) => {
  const {setTitle} = props;
  const {t} = useTranslation()
  return (
  <Page
    setTitle={setTitle}
    title={t("dashboard")}
  >
      <Typography>Je suis le dashboard</Typography>
  </Page>
  );
};

