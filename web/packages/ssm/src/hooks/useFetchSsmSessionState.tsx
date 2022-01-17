import {useCallback} from "react";
import {SessionName, SessionState, SSMRequester, SsmUriDTO} from "ssm";
import {AsyncStatus, useAsyncResponse} from "utils";

export interface FetchSsmSessionTransactionResponse {
    status: AsyncStatus,
    result?: SessionState;
}

export const useFetchSsmSessionState = (ssmUri: SsmUriDTO, sessionName: SessionName, transactionId: string): FetchSsmSessionTransactionResponse => {
    const fetchSession = useCallback(
        async () => {
            // const ssmUri = ssmList.get(ssmUri)?.uri?.uri ?? ""
            return SSMRequester.fetchSessionState(ssmUri, sessionName, transactionId)
        },
        [ssmUri.uri, sessionName, transactionId],
    )
    return useAsyncResponse(fetchSession)
}