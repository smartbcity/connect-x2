import {useCallback} from "react";
import {Session, SSMRequester, SsmUri} from "ssm";
import {AsyncStatus, useAsyncResponse} from "utils";

export interface FetchSsmSessionResponse {
    status: AsyncStatus,
    result?: Session;
}

export const useFetchSsmSession = (ssmUri: SsmUri, sessionName: string): FetchSsmSessionResponse => {
    const fetchSession = useCallback(
        async () => {
            return SSMRequester.fetchSession(ssmUri, sessionName)
        },
        [ssmUri, sessionName],
    )

    return useAsyncResponse(fetchSession);
}
