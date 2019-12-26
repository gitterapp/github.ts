// Contribution model
export default class Contribution {
  constructor(public count: number, public color: string, public date: string) {}

  toJson() {
    return JSON.stringify(this)
  }

  static fromJson(json) {
    return JSON.parse(json)
  }
}
