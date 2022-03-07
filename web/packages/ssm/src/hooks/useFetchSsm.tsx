import {useCallback} from "react";
import {SSM, SSMRequester, SsmUriDTO} from "ssm";
import {AsyncStatus, useAsyncResponse} from "utils";

export interface FetchSSMResponse {
    status: AsyncStatus,
    result?: SSM;
}

export const useFetchSsm = (ssmUri: SsmUriDTO): FetchSSMResponse => {
    const fetchSSM = useCallback(
        async () => {
            return SSMRequester.fetchSsm(ssmUri)
        },
        [ssmUri.uri],
    )
    return useAsyncResponse(fetchSSM)
}