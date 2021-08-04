import { Timeline, TimeLineCell } from "@smartb/archetypes-ui-components"
import { LoadingComponent, Panel } from "components"
import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import {Session, SessionState, useFetchTransactions} from "ssm"
import { highLevelStyles } from "@smartb/archetypes-ui-themes"


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
        height: "max-content"
    }
})

interface HistoryCardProps {
    ssmName: string
    currentSession: Session
    onChangeTransaction: (log?: SessionState) => void
}

export const HistoryCard = (props: HistoryCardProps) => {
    const { ssmName, currentSession, onChangeTransaction } = props
    const { t } = useTranslation()
    const classes = useStyles()
    const [selectedCellId, setSelectedCellId] = useState<string | undefined>(undefined)

    // TODO If possible We should not request all transactions here here, just fetch transaction with id,
    //  and we should probably not do http request in a sub components
    const { result } = useFetchTransactions(ssmName, currentSession.id, false)

    const onSelectCell = useCallback(
        (cell: TimeLineCell) => {
            setSelectedCellId(prevCellId => {
                const cellId = cell.id === prevCellId ? undefined : cell.id
                if (cellId) {
                    const log = result?.sessionStates.find((sessionState: SessionState) => cellId === sessionState.transaction?.transactionId)
                    log && onChangeTransaction(log)
                } else {
                    onChangeTransaction(undefined)
                }
                return cellId
            })
        },
        [onChangeTransaction, result?.sessionStates],
    )

    return (
        <Panel
            className={classes.panel}
            header={t("detailsPage.transactionsHistory")}
            bodyClassName={classes.panelBody}
            embedUrl={`${window.location.origin}/embed/${currentSession.state.details.ssm}/${currentSession.id}/history`}
        >
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
