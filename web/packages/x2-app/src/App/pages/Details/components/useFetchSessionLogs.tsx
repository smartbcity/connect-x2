import { Box, Typography } from "@material-ui/core"
import { TimeLineCell } from "@smartb/archetypes-ui-components"
import { useCallback } from "react"
import { Session, SessionLog, SSMRequester } from "ssm"
import { useAsync } from "utils"

export const useFetchSessionLogs = (currentSession?: Session) => {
    const getLines = useCallback(
        async (): Promise<{ lines: TimeLineCell[], logs: SessionLog[] }> => {
            if (!currentSession) return { lines: [], logs: [] }
            const logs = await SSMRequester.fetchSessionLogs(currentSession.session)
            if (!logs) return { lines: [], logs: [] }
            return {
                lines: logs.slice(0, 10).map((log) => {
                    const init = log.state?.origin?.role === undefined && log.state?.origin?.action === undefined
                    return {
                        id: log.txId,
                        content: (
                            <Box display="flex" flexDirection="column">
                                <Typography>
                                    {init ? "Initialization" : `${log.state?.origin?.role}: ${log.state?.origin?.action}`}
                                </Typography>
                            </Box>
                        ),
                        startTime: "12/02/2021",
                    }
                }),
                logs: logs
            }
        },
        [currentSession]
    )
    const { result } = useAsync(getLines)

    return result
}