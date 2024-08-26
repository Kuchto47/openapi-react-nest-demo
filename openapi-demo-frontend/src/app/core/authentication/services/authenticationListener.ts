const authenticationListeners: ((value: string) => void)[] = []

export function addAuthenticationListener(listenerFn: (token: string) => void) {
    authenticationListeners.push(listenerFn)
}

export function notifyAuthenticationListeners(token: string) {
    for (const listenerFn of authenticationListeners) {
        listenerFn(token)
    }
}

// Shall be called eg. in AuthProvider when user is signed in, to notify all listeners about the new token
notifyAuthenticationListeners('EXAMPLE DEMO TOKEN')