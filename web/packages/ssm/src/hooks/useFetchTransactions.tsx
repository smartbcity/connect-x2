import {Box, Typography} from "@material-ui/core"
import {TimeLineCell} from "@smartb/archetypes-ui-components"
import {useCallback} from "react"
import {SessionState, SSMRequester} from "ssm"
import {AsyncStatus, useAsyncResponse} from "utils"
import {TransactionDetails} from "components";

export interface FetchTransactionsResponse {
    status: AsyncStatus,
    result?: TransactionsLines;
}

export interface TransactionsLines {
    lines: TimeLineCell[],
    sessionStates: SessionState[]
}
/**
 * TODO Remove this hooks, use useFetchSsmSessionTransaction and build TimeLineCell where it's needed
 *  I don't thing we should build a react component in the hook!
 */
export const useFetchTransactions = (ssmName: string, sessionId: string, embed: boolean): FetchTransactionsResponse => {
    const getLines = useCallback(
        async (): Promise<TransactionsLines> => {
            const sessionStates = await SSMRequester.fetchSessionStates(ssmName, sessionId)
            return {
                sessionStates: sessionStates,
                lines: toTimeLineCells(sessionStates, embed),
            }
        },
        [sessionId]
    )
    return useAsyncResponse(getLines)
}

const toTimeLineCells = (sessionStates: SessionState[], embed: boolean) => {
    return sessionStates.map((sessionState, index): TimeLineCell => {
        const init = sessionState.details?.origin?.role === undefined && sessionState.details?.origin?.action === undefined
        return embed ? toTimeLineCellEmbed(sessionState, index, init) : toTimeLineCell(sessionState, index, init)
    });
}

const toTimeLineCell = (sessionState: SessionState, index: number, init: boolean): TimeLineCell => {
    return {
        id: sessionState.transaction?.transactionId ?? "sessionState n°" + index,
        content: (
            <Box display="flex" flexDirection="column">
                <Typography>
                    {init ? "Initialization" : `${sessionState.details?.origin?.role}: ${sessionState.details?.origin?.action}`}
                </Typography>
            </Box>
        ),
        startTime: new Date(sessionState.transaction?.timestamp).toLocaleDateString(),
    };
}

const toTimeLineCellEmbed = (sessionState: SessionState, index: number, init: boolean): TimeLineCell => {
    return {
        id: sessionState.transaction?.transactionId ?? "sessionState n°" + index,
        content: (
            <Box display="flex" flexDirection="column">
                <Typography>
                    {init ? "Initialization" : `${sessionState.details?.origin?.role}: ${sessionState.details?.origin?.action}`}
                </Typography>
                <TransactionDetails transaction={sessionState} minified shortVersion/>
            </Box>
        ),
        startTime: new Date(sessionState.transaction?.timestamp).toLocaleDateString(),
    };
}