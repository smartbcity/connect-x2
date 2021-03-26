import { Timeline, TimeLineCell } from "@smartb/archetypes-ui-components"
import { LoadingComponent, Panel } from "components"
import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { Session, SessionLog } from "ssm"
import { highLevelStyles } from "utils"
import { useFetchSessionLogs } from "./useFetchSessionLogs"

const useStyles = highLevelStyles({
    panel: {
        width: "40%"
    },
    panelBody: {
        height: "400px",
        overflow: "auto"
    }
})

interface HistoryCardProps {
    currentSession?: Session
    onChangeCurrentLog: (log?: SessionLog) => void
}

export const HistoryCard = (props: HistoryCardProps) => {
    const { currentSession, onChangeCurrentLog } = props
    const { t } = useTranslation()
    const classes = useStyles()
    const [selectedCellId, setSelectedCellId] = useState<string | undefined>(undefined)

    const result: { lines: TimeLineCell[], logs: SessionLog[] } | undefined = useFetchSessionLogs(currentSession)

    const onSelectCell = useCallback(
        (cell: TimeLineCell) =>  {
            setSelectedCellId(prevCellId => {
                const cellId = cell.id === prevCellId ? undefined : cell.id
                if (cellId) {
                   const log = result?.logs.find((log) => cellId === log.txId)
                   log && onChangeCurrentLog(log)
                }
                return cellId
            })
        },
        [onChangeCurrentLog, result?.logs],
    )

    return (
        <Panel className={classes.panel} header={t("detailsPage.transactionsHistory")} bodyClassName={classes.panelBody}>
            {!result ?
                <LoadingComponent />
                :
                <Timeline
                    lines={result.lines}
                    passedTimeLine
                    selectedCellId={selectedCellId}
                    onSelectCell={onSelectCell}
                />
            }
        </Panel>
    )
}
