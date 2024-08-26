import { Configuration, ConfigurationParameters } from "../../../generated/demo-sdk";
import { authMiddleware } from "./authMiddleware.ts";

export interface DemoConfigurationParameters {
    authenticate?: boolean
    fetchApi?: WindowOrWorkerGlobalScope['fetch']
}

export class DemoConfiguration extends Configuration {
    constructor(private demoConfiguration?: ConfigurationParameters & DemoConfigurationParameters) {
        super(DemoConfiguration.setDefaults(demoConfiguration));
    }

    public get fetchApi() {
        if (this.demoConfiguration?.fetchApi) {
            return this.demoConfiguration.fetchApi
        }
        return super.fetchApi
    }

    private static setDefaults(configuration?: ConfigurationParameters & DemoConfigurationParameters) {
        if (!configuration) {
            configuration = {}
        }
        const middleware = (configuration.middleware = configuration.middleware || [])
        if (configuration.authenticate) {
            middleware.push(authMiddleware)
        }
        configuration.basePath = 'http://localhost:5555' /*getBasePath() from configuration - per environment*/
        return configuration
    }
}