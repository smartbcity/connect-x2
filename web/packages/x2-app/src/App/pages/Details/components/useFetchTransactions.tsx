import { Box, Typography } from "@material-ui/core"
import { TimeLineCell } from "@smartb/archetypes-ui-components"
import { useCallback } from "react"
import { Session, SSMRequester, SessionState } from "ssm"
import { useAsyncResponse } from "utils"

export const useFetchTransactions = (currentSession: Session) => {
    const getLines = useCallback(
        async (): Promise<{ lines: TimeLineCell[], sessionStates: SessionState[] }> => {
            const sessionStates = await SSMRequester.fetchSessionStates(currentSession.id)
            return {
                lines: sessionStates.map((sessionState, index): TimeLineCell => {
                    const init = sessionState.details?.origin?.role === undefined && sessionState.details?.origin?.action === undefined
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
                    }
                }),
                sessionStates: sessionStates
            }
        },
        [currentSession]
    )
    const { result } = useAsyncResponse(getLines)

    return result
}