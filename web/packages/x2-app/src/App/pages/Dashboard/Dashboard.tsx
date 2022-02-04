import { Page } from "components";
import { useTranslation } from "react-i18next";
import { CardsHeader } from "./components/CardsHeader";
import { Label, LabelSwitch } from "@smartb/g2-components";
import { useCallback, useMemo, useState } from "react";
import { Box, Paper } from "@mui/material";

interface DashboardProps {
    setTitle: (title: string) => void
}

export type LabelSwitchFilter = "Month" | "3Month" | "Year" | "All"

export const Dashboard = (props: DashboardProps) => {
  const {setTitle} = props;
  const {t} = useTranslation()
  const [labelValue, setLabelValue] = useState<LabelSwitchFilter>("3Month")

  const labels = useMemo((): Label[] => [{
    name: t("month"),
    value: "Month",
    key: "LabelSwitch_month"
  },{
    name: `3 ${t("months")}`,
    value: "3Month",
    key: "LabelSwitch_3month"
  },{
    name: t("year"),
    value: "Year",
    key: "LabelSwitch_year"
  },{
    name: t("all"),
    value: "All",
    key: "LabelSwitch_all"
  }], [t])

  const onLabelChange = useCallback(
    (value: string) => setLabelValue(value as LabelSwitchFilter),
    [],
  )

  return (
  <Page
    setTitle={setTitle}
    title={t("dashboard")}
  >
      <CardsHeader />
      <Box display="flex" justifyContent="flex-end" paddingRight="20px">
        <LabelSwitch selectedLabelValue={labelValue} onLabelChange={onLabelChange} labels={labels} />
      </Box>
      <Paper style={{width: "calc(100% - 40px)", height: "500px", margin: "20px"}} />
  </Page>
  );
};

