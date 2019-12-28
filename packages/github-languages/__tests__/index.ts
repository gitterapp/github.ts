import getLanguages from '../src'

describe('get languages', () => {
  let languages
  beforeAll(async () => {
    languages = await getLanguages()
  })

  test('has data', () => {
    expect(languages).not.toBeNull()
    expect(languages).not.toHaveLength(0)
  })
})
