function wait(delay : number){
    return new Promise((resolve) => setTimeout(resolve, delay));
}

export default function fetchRetry(url : RequestInfo, delay: number, tries: number, fetchOptions?: RequestInit) {
    function onError(err: any) {
        const triesLeft = tries - 1;
        if(triesLeft <= 0) {
            throw err;
        }

        return wait(delay).then(() => fetchRetry(url, delay, triesLeft, fetchOptions));
    }
    return fetch(url,fetchOptions).catch(onError);
}
