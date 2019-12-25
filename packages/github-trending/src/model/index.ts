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
  ) {
    this.owner = owner
    this.avatar = avatar
    this.name = name
    this.description = description
    this.descriptionHTML = descriptionHTML
    this.starCount = starCount
    this.forkCount = forkCount
    this.stars = stars
    this.primaryLanguage = primaryLanguage
    this.buildBys = buildBys
  }

  toJson() {
    return JSON.stringify(this)
  }

  static fromJson(json) {
    return JSON.parse(json)
  }
}

export class PrimaryLanguage {
  constructor(public name: string, public color: string) {
    this.name = name
    this.color = color
  }

  toJson() {
    return JSON.stringify(this)
  }

  static fromJson(json) {
    return JSON.parse(json)
  }
}

export class RepositoryBuildBy {
  constructor(public avatar: string, public username: string) {
    this.avatar = avatar
    this.username = username
  }

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
  ) {
    this.avatar = avatar
    this.username = username
    this.nickname = nickname
    this.popularRepository = popularRepository
  }

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
  ) {
    this.url = url
    this.name = name
    this.description = description
    this.descriptionRawHtml = descriptionRawHtml
  }

  toJson() {
    return JSON.stringify(this)
  }

  static fromJson(json) {
    return JSON.parse(json)
  }
}
