import { Page } from "components";
import { useTranslation } from "react-i18next";
import { CardsHeader } from "./components/CardsHeader";
import { Label, LabelSwitch } from "@smartb/archetypes-ui-components";
import { useCallback, useMemo, useState } from "react";
import { Box } from "@material-ui/core";

interface DashboardProps {
    setTitle: (title: string) => void
}

export const Dashboard = (props: DashboardProps) => {
  const {setTitle} = props;
  const {t} = useTranslation()
  const [labelValue, setLabelValue] = useState("3Month")

  const labels = useMemo((): Label[] => [{
    name: "Month",
    value: "Month",
    key: "LabelSwitch_month"
  },{
    name: "3 months",
    value: "3Month",
    key: "LabelSwitch_3month"
  },{
    name: "Year",
    value: "Year",
    key: "LabelSwitch_year"
  },{
    name: "All",
    value: "All",
    key: "LabelSwitch_all"
  }], [])

  const onLabelChange = useCallback(
    (value: string) => setLabelValue(value),
    [],
  )

  return (
  <Page
    setTitle={setTitle}
    title={t("dashboard")}
  >
      <CardsHeader />
      <Box display="flex" justifyContent="flex-end">
        <LabelSwitch selectedLabelValue={labelValue} onLabelChange={onLabelChange} labels={labels} />
      </Box>
  </Page>
  );
};

