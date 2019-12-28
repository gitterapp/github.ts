const { getContributions } = require('../src')

describe('get contributions', () => {
  test('has data', async () => {
    const contributions = await getContributions('upcwangying')
    expect(contributions).not.toBeUndefined()
  })
})
