import { Box } from "@material-ui/core";
import { Page } from "components";
import React, { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { SSM, Session, Transaction } from "ssm";
import { DetailsCard } from "./components/DetailsCard";
import { HistoryCard } from "./components/HistoryCard";
import { InformationCard } from "./components/InformationCard";
import { ProtocolCard } from "./components/ProtocolCard";

interface DetailsProps {
  setTitle: (title: string) => void
  ssmList: Map<string, SSM>
}

export const Details = (props: DetailsProps) => {
  const { setTitle, ssmList } = props;
  const { t } = useTranslation()
  const { ssmName, sessionName } = useParams<{ ssmName: string, sessionName: string }>();
  const [transaction, setTransaction] = useState<Transaction | undefined>(undefined)
  const current: {ssm?: SSM, session?: Session} = useMemo(() => {
    const ssm = ssmList.get(ssmName)
    const session = ssm?.sessions.find((session) => session.session === sessionName)
    return {
      ssm: ssm,
      session: session
    }
  }, [ssmName, sessionName, ssmList])

  const onChangeTransaction = useCallback(
    (transaction?: Transaction) => setTransaction(transaction),
    [],
  )

  return (
    <Page
      setTitle={setTitle}
      title={t("details")}
    >
      <CardContainer>
        <ProtocolCard currentSSM={current.ssm} />
        <InformationCard currentSession={current.session} />
      </CardContainer>
      <CardContainer>
        <HistoryCard currentSession={current.session} onChangeTransaction={onChangeTransaction} />
        <DetailsCard transaction={transaction} />
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
