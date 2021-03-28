import { Box, Typography } from "@material-ui/core"
import { TimeLineCell } from "@smartb/archetypes-ui-components"
import { useCallback } from "react"
import { useTranslation } from "react-i18next"
import { Session, SessionLog, SSMRequester } from "ssm"
import { useAsync } from "utils"

export const useFetchSessionLogs = (currentSession?: Session) => {
    const { t } = useTranslation()
    const getLines = useCallback(
        async (): Promise<{ lines: TimeLineCell[], logs: SessionLog[] }> => {
            if (!currentSession) return { lines: [], logs: [] }
            const logs = await SSMRequester.fetchSessionLogs(currentSession.session)
            if (!logs) return { lines: [], logs: [] }
            return {
                lines: logs.slice(0, 10).map((log) => ({
                    id: log.txId,
                    content: (
                        <Box display="flex" flexDirection="column">
                            <Typography>
                                {`${log.state?.origin?.role}: ${log.state?.origin?.action}`}
                            </Typography>
                            <Typography>
                                {t("detailsPage.transactionId", { transactionId: log.txId })}
                            </Typography>
                        </Box>
                    ),
                    startTime: "12/02/2021",
                })),
                logs: logs
            }
        },
        [currentSession]
    )
    const { result } = useAsync(getLines)

    return result
}