import { Page } from "components";
import { useTranslation } from "react-i18next";
import { SessionTable } from "./components/SessionTable";

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
      <SessionTable />
  </Page>
  );
};
