export default class Language {
  constructor(public text: string, public color: string) {
    this.text = text
    this.color = color
  }

  toJson() {
    return JSON.stringify(this)
  }

  static fromJson(json) {
    return JSON.parse(json)
  }
}
