export function addHeader(request: RequestInit, key: string, value: string) {
    const headers = new Headers(request.headers)
    headers.append(key, value)
    request.headers = {}
    for (const [key, value] of headers.entries()) {
        request.headers[key] = value
    }
}