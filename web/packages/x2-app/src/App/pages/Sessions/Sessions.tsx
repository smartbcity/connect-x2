import { Box } from "@material-ui/core";
import { Page } from "components";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { SSM } from "ssm";
import { ProtocolCard } from "./components/ProtocolCard";
import { SessionNumberCard } from "./components/SessionNumberCard";
import { SessionTable } from "./components/SessionTable";
import { StepsCompletedCard } from "./components/StepsCompletedCard";

interface SessionsProps {
  setTitle: (title: string) => void
  ssmList: Map<string, SSM>
}

export const Sessions = (props: SessionsProps) => {
  const { setTitle, ssmList } = props;
  const { t } = useTranslation()
  const { ssmName } = useParams<{ ssmName: string }>();

  const currentSSM = useMemo(() => ssmList.get(ssmName), [ssmList, ssmName])

  return (
    <Page
      setTitle={setTitle}
      title={t("sessions")}
    >
      <Box display="flex" justifyContent="space-around">
        <StepsCompletedCard />
        <SessionNumberCard />
        <ProtocolCard />
      </Box>
      <SessionTable currentSSM={currentSSM} />
    </Page>
  );
};
