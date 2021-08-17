import {useCallback} from "react"
import {SessionState, SSMRequester} from "ssm"
import { useAsyncResponse} from "utils"

export const useFetchTransactions = (ssmName: string, sessionId: string) => {
    const getLines = useCallback(
        async () => {
            const sessionStates = await SSMRequester.fetchSessionStates(ssmName, sessionId)
            const canGenerateCertificates = await (canDoGenerateCertificates(sessionStates).then((list) => list.map((it) => it.canGenerateCertificate)))
            return  {
                sessionStates: sessionStates,
                canGenerateCertificates: canGenerateCertificates
            }
        },
        [sessionId]
    )
    return useAsyncResponse(getLines)
}

export const canDoGenerateCertificates = (sessionStates: SessionState[]) => {
    return SSMRequester.CanGenerateCertificates(
        //@ts-ignore
        sessionStates.map((sessionState) => ({
            sessionState: sessionState.details
        }))
    )
}