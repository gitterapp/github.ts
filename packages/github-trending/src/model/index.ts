// trending repositories model
export class TrendingRepository {
  constructor(
    public owner: string,
    public avatar: string,
    public name: string,
    public description: string,
    public descriptionHTML: string,
    public starCount: number,
    public forkCount: number,
    public stars: string,
    public primaryLanguage: PrimaryLanguage,
    public buildBys: RepositoryBuildBy[],
  ) {}

  toJson() {
    return JSON.stringify(this)
  }

  static fromJson(json) {
    return JSON.parse(json)
  }
}

export class PrimaryLanguage {
  constructor(public name: string, public color: string) {}

  toJson() {
    return JSON.stringify(this)
  }

  static fromJson(json) {
    return JSON.parse(json)
  }
}

export class RepositoryBuildBy {
  constructor(public avatar: string, public username: string) {}

  toJson() {
    return JSON.stringify(this)
  }

  static fromJson(json) {
    return JSON.parse(json)
  }
}

// trending developers model
export class TrendingDeveloper {
  constructor(
    public avatar: string,
    public username: string,
    public nickname: string,
    public popularRepository: string,
  ) {}

  toJson() {
    return JSON.stringify(this)
  }

  static fromJson(json) {
    return JSON.parse(json)
  }
}

// popular repository model
export class PopularRepository {
  constructor(
    public url: string,
    public name: string,
    public description: string,
    public descriptionRawHtml: string,
  ) {}

  toJson() {
    return JSON.stringify(this)
  }

  static fromJson(json) {
    return JSON.parse(json)
  }
}
