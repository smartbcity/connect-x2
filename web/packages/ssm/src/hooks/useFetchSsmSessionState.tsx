import {useCallback} from "react";
import {SessionState, SSM, SsmName, SSMRequester} from "ssm";
import {AsyncStatus, useAsyncResponse} from "utils";

export interface FetchSsmSessionTransactionResponse {
    status: AsyncStatus,
    result?: SessionState;
}

export const useFetchSsmSessionState = (ssmList: Map<SsmName, SSM>, ssmName: SsmName, sessionName: string, transactionId: string): FetchSsmSessionTransactionResponse => {
    const fetchSession = useCallback(
        async () => {
            const ssmUri = ssmList.get(ssmName)?.uri?.uri ?? ""
            return SSMRequester.fetchSessionState(ssmUri, sessionName, transactionId)
        },
        [ssmList, ssmName, sessionName, transactionId],
    )
    return useAsyncResponse(fetchSession)
}