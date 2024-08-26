const authenticationListeners: ((value: string) => void)[] = []

export function addAuthenticationListener(listenerFn: (token: string) => void) {
    authenticationListeners.push(listenerFn)
}

export function notifyAuthenticationListeners(token: string) {
    for (const listenerFn of authenticationListeners) {
        listenerFn(token)
    }
}