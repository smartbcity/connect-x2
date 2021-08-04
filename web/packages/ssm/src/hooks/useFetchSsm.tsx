import {useCallback} from "react";
import {SSM, SSMRequester} from "ssm";
import {AsyncStatus, useAsyncResponse} from "utils";

export interface FetchSSMResponse {
    status: AsyncStatus,
    result?: SSM;
}

export const useFetchSsm = (ssmName: string): FetchSSMResponse => {
    const fetchSSM = useCallback(
        async () => {
            return SSMRequester.fetchSSM(ssmName)
        },
        [ssmName],
    )
    return useAsyncResponse(fetchSSM)
}