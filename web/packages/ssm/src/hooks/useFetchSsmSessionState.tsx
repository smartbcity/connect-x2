import {useCallback} from "react";
import {SessionState, SSMRequester} from "ssm";
import {AsyncStatus, useAsyncResponse} from "utils";

export interface FetchSsmSessionTransactionResponse {
    status: AsyncStatus,
    result?: SessionState;
}

export const useFetchSsmSessionState = (ssmName: string, sessionName: string, transactionId: string): FetchSsmSessionTransactionResponse => {
    const fetchSession = useCallback(
        async () => {
            return SSMRequester.fetchSessionState(ssmName, sessionName, transactionId)
        },
        [sessionName, ssmName, transactionId],
    )
    return useAsyncResponse(fetchSession)
}