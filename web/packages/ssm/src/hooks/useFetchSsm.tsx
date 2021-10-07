import {useCallback} from "react";
import {SSM, SSMRequester, SsmUri} from "ssm";
import {AsyncStatus, useAsyncResponse} from "utils";

export interface FetchSSMResponse {
    status: AsyncStatus,
    result?: SSM;
}

export const useFetchSsm = (ssmUri: SsmUri): FetchSSMResponse => {
    const fetchSSM = useCallback(
        async () => {
            return SSMRequester.fetchSSM(ssmUri)
        },
        [ssmUri],
    )
    return useAsyncResponse(fetchSSM)
}