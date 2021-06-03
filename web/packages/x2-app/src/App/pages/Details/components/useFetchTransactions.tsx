import { Box, Typography } from "@material-ui/core"
import { TimeLineCell } from "@smartb/archetypes-ui-components"
import { useCallback } from "react"
import { Session, SSMRequester, Transaction } from "ssm"
import { useAsync } from "utils"

export const useFetchTransactions = (currentSession?: Session) => {
    const getLines = useCallback(
        async (): Promise<{ lines: TimeLineCell[], transactions: Transaction[] }> => {
            if (!currentSession) return { lines: [], transactions: [] }
            const transactions = await SSMRequester.fetchTransactions(currentSession.id)
            if (!transactions) return { lines: [], transactions: [] }
            return {
                lines: transactions.map((transaction) => {
                    const init = transaction.state?.origin?.role === undefined && log.state?.origin?.action === undefined
                    return {
                        id: transaction.id,
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
                transactions: transactions
            }
        },
        [currentSession]
    )
    const { result } = useAsync(getLines)

    return result
}