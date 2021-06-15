import { Box, Typography } from "@material-ui/core"
import { TimeLineCell } from "@smartb/archetypes-ui-components"
import { TransactionDetails } from "components"
import { useCallback } from "react"
import { SessionState, SSMRequester } from "ssm"
import { useAsyncResponse } from "utils"

export const useFetchTransactions = (ssmName: string, sessionId: string) => {
    const getLines = useCallback(
        async (): Promise<{ lines: TimeLineCell[], sessionStates: SessionState[] }> => {
            const sessionStates = await SSMRequester.fetchSessionStates(ssmName, sessionId)
            if (!sessionStates) return { lines: [], sessionStates: [] }
            return {
                lines: sessionStates.map((sessionState, index) => {
                    const init = sessionState.details?.origin?.role === undefined && sessionState.details?.origin?.action === undefined
                    return {
                        id: sessionState.transaction?.transactionId ?? "sessionState n°" + index,
                        content: (
                            <Box display="flex" flexDirection="column">
                                <Typography>
                                    {init ? "Initialization" : `${sessionState.details?.origin?.role}: ${sessionState.details?.origin?.action}`}
                                </Typography>
                                <TransactionDetails transaction={sessionState} minified shortVersion />
                            </Box>
                        ),
                        startTime: "12/02/2021",
                    }
                }),
                sessionStates: sessionStates
            }
        },
        [sessionId]
    )

    return useAsyncResponse(getLines)
}