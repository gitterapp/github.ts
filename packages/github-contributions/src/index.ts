const rp = require('request-promise')
const cheerio = require('cheerio')
const Contribution = require('./model')

const options = {
  uri: 'https://github.com/trending',
  transform: body => cheerio.load(body),
}

const getContributions = (
  login: string,
  { from, to }: { from?: string; to?: string } = {},
): Promise<any> =>
  new Promise((resolve, reject) => {
    if (!login) throw new Error('login must not be null')
    let uri = `https://github.com/${login}`
    if (from && to) {
      uri += `?from=${from}&to=${to}`
    }
    rp({ ...options, uri })
      .then($ => {
        if (!$) {
          reject('response is null!')
          return
        }
        const contributions = []
        $('.js-calendar-graph-svg rect').each((i, el) => {
          contributions.push(
            new Contribution({
              color: $(el).attr('fill'),
              count: parseInt($(el).attr('data-count'), 10),
              date: $(el).attr('data-date'),
            }),
          )
        })
        resolve(contributions)
      })
      .catch(error => {
        reject(error)
      })
  })

const getContributionsSvg = (
  login: string,
  { keepDateText = false, from, to }: { keepDateText?: boolean; from?: string; to?: string } = {},
): Promise<any> =>
  new Promise((resolve, reject) => {
    if (!login) throw new Error('login must not be null')
    let uri = `https://github.com/${login}`
    if (from && to) {
      uri += `?from=${from}&to=${to}`
    }
    rp({ ...options, uri })
      .then($ => {
        if (!$) {
          reject('response is null!')
          return
        }
        const svgNode = $('.js-calendar-graph-svg')

        if (!keepDateText) {
          // todo
        }

        resolve(svgNode.html())
      })
      .catch(error => {
        reject(error)
      })
  })

export default {
  getContributions,
  getContributionsSvg,
}
