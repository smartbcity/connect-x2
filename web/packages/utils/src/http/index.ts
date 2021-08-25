
export interface HttpOptions {
    url: string,
    method: "GET" | "PUT" | "POST" | "DELETE",
    body?: string,
    jwt?: string,
    contentType?: "application/json" | "text/plain" | "none"
    returnType?: "json" | "text"
    errorHandler?: (error: Error) => void
}

export const requestCoop = function <T, R>(
    location: string,
    body?: T,
) {
    //@ts-ignore
    const url = window._env_.COOP_URL
    //@ts-ignore
    const token = window.token
    const options: HttpOptions = {
        url: `${url}/api/${location}`,
        method: "POST",
        jwt: token,
        body: JSON.stringify(body)
    }
    return request<R[]>(options).then(it => it[0])
};

export const requestCoops = function <T, R>(
    location: string,
    body?: T,
) {
    //@ts-ignore
    const url = window._env_.COOP_URL
    //@ts-ignore
    const token = window.token
    const options: HttpOptions = {
        url: `${url}/api/${location}`,
        method: "POST",
        jwt: token,
        body: JSON.stringify(body)
    }
    return request<R[]>(options)
};

export const request = <T>(
    options: HttpOptions
): Promise<T> => {
    const { method, url, body, contentType = "application/json", jwt, errorHandler = () => { }, returnType = "json" } = options
    return fetch(url, {
        method: method,
        headers: {
            ...(jwt !== undefined && jwt !== ""
                ? {
                    Authorization: `Bearer ${jwt}`,
                }
                : {}),
            ...(contentType !== "none"
                ? {
                    "Content-Type": contentType,
                }
                : {}),
            "Access-Control-Allow-Origin": "*",
        },
        body: body,
    })
        .then((response) => {
            if (!response.ok) {
                response.text().then((error) => {
                    throw new Error(error);
                }).catch(errorHandler)
            } else {
                if (returnType === "json") {
                    return response.json()
                }
                return response.text()
            }
        })
        .catch(errorHandler)
};