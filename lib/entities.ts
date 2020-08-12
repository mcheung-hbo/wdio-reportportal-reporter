import {STATUS, TYPE} from "./constants";
import {parseTags} from "./utils";
import {Attribute} from "./ReporterOptions";

export class StartTestItem {
  public name = "";
  public description;
  public parameters?: any[];
  public attributes = [];
  public type: TYPE;
  public codeRef: string;
  public retry = false;
  public hasStats: boolean;

  constructor(name: string, type: TYPE) {
    this.name = name;
    this.type = type;
    if (this.name.length > 256) {
      this.name = this.name.slice(0, 256);
    }
  }

  public addTags() {
    const tags = parseTags(this.name);
    if (tags.length > 0) {
      const attrs = tags.map((value) => (new Attribute("tag", value)));
      this.attributes.push(new Attribute("func", tags[0]));
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
        this.attributes.push(new Attribute("title", title));
      }
    }
  }
}

export class EndTestItem {
  public status: STATUS;
  public issue?: Issue;
  public description?: string;

  constructor(status: STATUS, issue?: Issue) {
    this.status = status;
    if (issue) {
      this.issue = issue;
    }
  }
}

export class Issue {
  private issueType: string;

  constructor(issueType: string) {
    this.issueType = issueType;
  }
}

export class StorageEntity {
  public readonly type: TYPE;
  public readonly id: string;
  public readonly promise: Promise<any>;
  public readonly wdioEntity: any;

  constructor(type: TYPE, id: string, promise: Promise<any>, wdioEntity: any) {
    this.type = type;
    this.id = id;
    this.promise = promise;
    this.wdioEntity = wdioEntity;
  }
}
