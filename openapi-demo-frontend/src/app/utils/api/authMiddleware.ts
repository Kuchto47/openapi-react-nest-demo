import {Middleware} from "../../../generated/demo-sdk";
import {addHeader} from "./addHeader.ts";
import {addAuthenticationListener} from "../../core/authentication/services/authenticationListener.ts";

let apiToken: string | null = null

function setApiToken(token: string | null) {
    apiToken = token
}

addAuthenticationListener(token => setApiToken(token))

export const authMiddleware: Middleware = {
    async pre(context) {
        addHeader(context.init, 'Authorization', `Bearer ${apiToken}`)
    }
}