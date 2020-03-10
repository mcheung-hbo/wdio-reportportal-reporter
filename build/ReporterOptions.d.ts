import { LEVEL, MODE } from "./constants";
export declare class Attribute {
    key?: string;
    value?: string;
    constructor(key?: string, value?: string);
}
export default class ReporterOptions {
    debug: boolean;
    autoAttachScreenshots: boolean;
    screenshotsLogLevel: LEVEL;
    reportSeleniumCommands: boolean;
    seleniumCommandsLogLevel: LEVEL;
    parseTagsFromTestTitle: boolean;
    setRetryTrue: boolean;
    cucumberNestedSteps: boolean;
    autoAttachCucumberFeatureToScenario: boolean;
    reportPortalClientConfig: {
        mode: MODE;
        attributes: (typeof Attribute)[];
        description: string;
    };
    removeTagsFromTestTitle: boolean;
    attachCapabilities: boolean;
    capabilitiesList: any[];
}
