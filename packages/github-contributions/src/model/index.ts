// Contribution model
export default class Contribution {
  constructor(public count: number, public color: string, public date: string) {
    this.count = count
    this.color = color
    this.date = date
  }

  toJson() {
    return JSON.stringify(this)
  }

  static fromJson(json) {
    return JSON.parse(json)
  }
}
