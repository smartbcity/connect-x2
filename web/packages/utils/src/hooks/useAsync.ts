import { useCallback, useEffect, useState } from "react";

export type AsyncStatus = "IDLE" | "PENDING" | "SUCCESS"

export const useAsync = function <T>(asyncFunction: () => Promise<T>, immediate: boolean = true): { execute: () => void, status: AsyncStatus, result?: T } {
    const [status, setStatus] = useState<AsyncStatus>('IDLE');
    const [result, setResult] = useState<T | undefined>(undefined);

    const execute = useCallback(() => {
        setStatus('PENDING');
        asyncFunction()
            .then(response => {
                setResult(response);
                setStatus('SUCCESS');
            })
    }, [asyncFunction]);

    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [execute, immediate]);

    return { execute, status, result };
};