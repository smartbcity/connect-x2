import { Timeline, TimeLineCell } from "@smartb/g2-components"
import { LoadingComponent, Panel, toTimeLineCells, CertificatPopUp } from "components"
import { useCallback, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import {Session, SessionState, SsmUriDTO, useSsmUri, useFetchTransactions} from "ssm"
import { makeG2STyles } from "@smartb/g2-themes"

const useStyles = makeG2STyles()({
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
    ssmUri: SsmUriDTO
    currentSession: Session
    onChangeTransaction: (log?: SessionState) => void
}

export const HistoryCard = (props: HistoryCardProps) => {
    const { ssmUri, currentSession, onChangeTransaction } = props
    const { t } = useTranslation()
    const { classes } = useStyles()
    const [selectedCellId, setSelectedCellId] = useState<string | undefined>(undefined)

    const [sessionStatePdf, setSessionStatePdf] = useState<SessionState | undefined>(undefined)
    const onGenerate = useCallback(
        (sessionState: SessionState) => setSessionStatePdf(sessionState),
        [],
    )
    const {path} = useSsmUri(ssmUri)
    const onClosePopUp = useCallback(
        () => setSessionStatePdf(undefined),
        [],
    )

    // TODO If possible We should not request all transactions here here, just fetch transaction with id,
    //  and we should probably not do http request in a sub components
    const { result } = useFetchTransactions(ssmUri, currentSession.sessionName)

    const timeLineCells = useMemo(() => result ? toTimeLineCells(result.sessionStates, result.canGenerateCertificates, onGenerate) : undefined, [result])

    const onSelectCell = useCallback(
        (cell: TimeLineCell) => {
            if (result) {
                setSelectedCellId(prevCellId => {
                    const cellId = cell.id === prevCellId ? undefined : cell.id
                    if (cellId) {
                        const log = result.sessionStates.find((sessionState: SessionState) => cellId === sessionState.transaction?.transactionId)
                        log && onChangeTransaction(log)
                    } else {
                        onChangeTransaction(undefined)
                    }
                    return cellId
                })
            }
        },
        [onChangeTransaction, result],
    )

    return (
        <Panel
            className={classes.panel}
            header={t("detailsPage.transactionsHistory")}
            bodyClassName={classes.panelBody}
            embedUrl={`${window.location.origin}/embed/${path}/${currentSession.sessionName}/history`}
        >
            {!timeLineCells ?
                <LoadingComponent />
                :
                <Timeline
                    className={classes.timeline}
                    lines={timeLineCells}
                    align="left"
                    passedTimeLine
                    selectedCellId={selectedCellId}
                    onSelectCell={onSelectCell}
                />
            }
            {sessionStatePdf && <CertificatPopUp currentSessionState={sessionStatePdf} onClose={onClosePopUp} open={!!sessionStatePdf} />}
        </Panel>
    )
}
