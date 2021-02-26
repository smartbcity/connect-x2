import { Box } from "@material-ui/core";
import { Page } from "components";
import React from "react";
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
      title={t("details")}
    >
      <CardContainer>
        <ProtocolCard />
        <InformationCard />
      </CardContainer>
      <CardContainer>
        <HistoryCard />
        <DetailsCard />
      </CardContainer>
    </Page>
  );
};

interface CardContainerProps {
  children?: React.ReactNode
}

const CardContainer = (props: CardContainerProps) => {
  const { children } = props

  return (
    <Box display="flex" justifyContent="space-around" flexWrap="wrap">
      {children}
    </Box>
  )
}
