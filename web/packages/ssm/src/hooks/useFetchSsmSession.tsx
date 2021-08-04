import {useCallback} from "react";
import {Session, SSMRequester} from "ssm";
import {AsyncStatus, useAsyncResponse} from "utils";

export interface FetchSsmSessionResponse {
    status: AsyncStatus,
    result?: Session;
}

export const useFetchSsmSession = (ssmName: string, sessionName: string): FetchSsmSessionResponse => {
    const fetchSession = useCallback(
        async () => {
            return SSMRequester.fetchSession(ssmName, sessionName)
        },
        [sessionName, ssmName],
    )

    return useAsyncResponse(fetchSession);
}
