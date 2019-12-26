export default class Language {
  constructor(public text: string, public color: string) {}

  toJson() {
    return JSON.stringify(this)
  }

  static fromJson(json) {
    return JSON.parse(json)
  }
}
