import Reporter from "@wdio/reporter";
import { LEVEL } from "./constants";
declare class ReportPortalReporter extends Reporter {
    private get isSynchronised();
    private set isSynchronised(value);
    static sendLog(level: LEVEL | keyof typeof LEVEL, message: any): void;
    static sendFile(level: LEVEL | keyof typeof LEVEL, name: string, content: any, type?: string): void;
    static sendLogToTest(test: any, level: LEVEL | keyof typeof LEVEL, message: any): void;
    static sendFileToTest(test: any, level: LEVEL | keyof typeof LEVEL, name: string, content: any, type?: string): void;
    static finishTestManually(test: any): void;
    private static reporterName;
    private launchId;
    private client;
    private storage;
    private tempLaunchId;
    private readonly options;
    private isMultiremote;
    private sanitizedCapabilities;
    private capabilities;
    private rpPromisesCompleted;
    private specFile;
    private featureStatus;
    private featureName;
    private bsUrlPromise;
    constructor(options: any);
    private onSuiteStart;
    private onSuiteEnd;
    private onTestStart;
    private onTestPass;
    private onTestFail;
    private onTestSkip;
    private testFinished;
    private onRunnerStart;
    private onRunnerEnd;
    private onBeforeCommand;
    private onAfterCommand;
    private onHookStart;
    private onHookEnd;
    private finishTestManually;
    private sendLog;
    private sendFile;
    private sendLogToTest;
    private sendFileToTest;
    private registerListeners;
    private now;
}
export = ReportPortalReporter;
