"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const ReporterOptions_1 = require("./ReporterOptions");
class StartTestItem {
    constructor(name, type) {
        this.name = "";
        this.attributes = [];
        this.retry = false;
        this.name = name;
        this.type = type;
        if (this.name.length > 256) {
            this.name = this.name.slice(0, 256);
        }
    }
    addTags() {
        const tags = utils_1.parseTags(this.name);
        if (tags.length > 0) {
            const attrs = tags.map((value) => (new ReporterOptions_1.Attribute("tag", value)));
            this.attributes.push(new ReporterOptions_1.Attribute("func", tags[0]));
            this.attributes.push(...attrs);
            // if tags are detected, it's either the name of test feature, like:
            // @tag1 @tag2 Test for a feature
            //
            // or the actual test scenario, like:
            // @tag3, @tag4: test for a specific senceario
            //
            // on these 2 cases, we parse out the test name
            // and send it over to report portal as attribute so each test feture / scenario
            // can be uniquely identified via the attribute to create dashboard that
            // can drilled down to individual test case level
            const testName = this.name.match(/: (.+$)/);
            if (testName && testName.length > 1) {
                const title = testName[1].replace(/ /g, '-');
                this.attributes.push(new ReporterOptions_1.Attribute("title", title));
            }
        }
    }
}
exports.StartTestItem = StartTestItem;
class EndTestItem {
    constructor(status, issue) {
        this.status = status;
        if (issue) {
            this.issue = issue;
        }
    }
}
exports.EndTestItem = EndTestItem;
class Issue {
    constructor(issueType) {
        this.issueType = issueType;
    }
}
exports.Issue = Issue;
class StorageEntity {
    constructor(type, id, promise, wdioEntity) {
        this.type = type;
        this.id = id;
        this.promise = promise;
        this.wdioEntity = wdioEntity;
    }
}
exports.StorageEntity = StorageEntity;
