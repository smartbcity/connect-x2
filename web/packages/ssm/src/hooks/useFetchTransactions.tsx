import {useCallback} from "react"
import {SessionState, SSMRequester, SsmUriDTO} from "ssm"
import { useAsyncResponse} from "utils"

export const useFetchTransactions = (ssmUri: SsmUriDTO, sessionId: string) => {
    const getLines = useCallback(
        async () => {
            const sessionStates = await SSMRequester.fetchSessionStates(ssmUri, sessionId)
            const canGenerateCertificates = await (canDoGenerateCertificates(sessionStates)
                .then((list) =>
                    list.map((it) => it.canGenerateCertificate)
                )
            )
            return  {
                sessionStates: sessionStates,
                canGenerateCertificates: canGenerateCertificates
            }
        },
        [ssmUri.uri, sessionId]
    )
    return useAsyncResponse(getLines)
}

export const canDoGenerateCertificates = (sessionStates: SessionState[]) => {
    return SSMRequester.CanGenerateCertificates(
        sessionStates.map((sessionState) => ({
            sessionState: sessionState.details
        }))
    )
}