"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
class Attribute {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
exports.Attribute = Attribute;
class ReporterOptions {
    constructor() {
        this.debug = false;
        this.autoAttachScreenshots = false;
        this.screenshotsLogLevel = constants_1.LEVEL.INFO;
        this.reportSeleniumCommands = false;
        this.seleniumCommandsLogLevel = constants_1.LEVEL.DEBUG;
        this.parseTagsFromTestTitle = false;
        this.setRetryTrue = false;
        this.cucumberNestedSteps = false;
        this.autoAttachCucumberFeatureToScenario = false;
        this.reportPortalClientConfig = { mode: constants_1.MODE.DEFAULT, attributes: [Attribute], description: "" };
        this.removeTagsFromTestTitle = false;
        this.attachCapabilities = false;
        this.capabilitiesList = [];
        this.useBrowserStack = false;
    }
}
exports.default = ReporterOptions;
