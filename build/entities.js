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
