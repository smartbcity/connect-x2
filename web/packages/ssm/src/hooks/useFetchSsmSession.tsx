import {useCallback} from "react";
import {Session, SSMRequester, SsmUriDTO} from "ssm";
import {AsyncStatus, useAsyncResponse} from "utils";

export interface FetchSsmSessionResponse {
    status: AsyncStatus,
    result?: Session;
}

export const useFetchSsmSession = (ssmUri: SsmUriDTO, sessionName: string): FetchSsmSessionResponse => {
    const fetchSession = useCallback(
        async () => {
            return SSMRequester.fetchSession(ssmUri, sessionName)
        },
        [ssmUri.uri, sessionName],
    )

    return useAsyncResponse(fetchSession);
}
