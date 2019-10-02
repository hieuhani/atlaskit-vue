import { capitalizeFirst } from '@ui/utils/capitalizeFirst'

describe('Utils', () => {
  describe('capitalizeFirst()', () => {
    it('should capitalize first character of string', () => {
      expect(capitalizeFirst('abc')).toEqual('Abc')
    })
  })
})
