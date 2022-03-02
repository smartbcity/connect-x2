import {useCallback} from "react";
import {SSM, SSMRequester, SsmUriDTO} from "ssm";
import {AsyncStatus, useAsyncResponse} from "utils";

export interface FetchSSMResponse {
    status: AsyncStatus,
    result?: SSM;
}

export const useFetchProtocols = (ssmUri: SsmUriDTO): FetchSSMResponse => {
    const useFetchProtocols = useCallback(
        async () => {
            return SSMRequester.getAllProtocols()
        },
        [ssmUri.uri],
    )
    return useAsyncResponse(useFetchProtocols)
}