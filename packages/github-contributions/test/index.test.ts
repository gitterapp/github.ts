const { getContributions } = require('../src')

describe('get contributions', () => {
  let contributions
  beforeAll(async () => {
    contributions = await getContributions('upcwangying')
  })

  test('has data', () => {
    expect(contributions).not.toBeUndefined()
  })
})
