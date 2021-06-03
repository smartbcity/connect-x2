import { Timeline, TimeLineCell } from "@smartb/archetypes-ui-components"
import { LoadingComponent, Panel } from "components"
import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { Session, Transaction } from "ssm"
import { highLevelStyles } from "@smartb/archetypes-ui-themes"
import { useFetchTransactions } from "./useFetchTransactions"

const useStyles = highLevelStyles()({
    panel: {
        width: "40%",
    },
    panelBody: {
        height: "450px",
        display: "flex",
        justifyContent: "center",
        overflow: "auto"
    },
    timeline: {
        display: "block",
        flexGrow: 0,
        height:"max-content"
    }
})

interface HistoryCardProps {
    currentSession?: Session
    onChangeTransaction: (log?: Transaction) => void
}

export const HistoryCard = (props: HistoryCardProps) => {
    const { currentSession, onChangeTransaction } = props
    const { t } = useTranslation()
    const classes = useStyles()
    const [selectedCellId, setSelectedCellId] = useState<string | undefined>(undefined)

    const result: { lines: TimeLineCell[], transactions: Transaction[] } | undefined = useFetchTransactions(currentSession)

    const onSelectCell = useCallback(
        (cell: TimeLineCell) => {
            setSelectedCellId(prevCellId => {
                const cellId = cell.id === prevCellId ? undefined : cell.id
                if (cellId) {
                    const log = result?.transactions.find((transaction) => cellId === transaction.id)
                    log && onChangeTransaction(log)
                } else {
                    onChangeTransaction(undefined)
                }
                return cellId
            })
        },
        [onChangeTransaction, result?.transactions],
    )

    return (
        <Panel className={classes.panel} header={t("detailsPage.transactionsHistory")} bodyClassName={classes.panelBody}>
            {!result ?
                <LoadingComponent />
                :
                <Timeline
                    className={classes.timeline}
                    lines={result.lines}
                    align="left"
                    passedTimeLine
                    selectedCellId={selectedCellId}
                    onSelectCell={onSelectCell}
                />
            }
        </Panel>
    )
}
