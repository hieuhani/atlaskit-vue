import { modifierClass } from '@ui/utils/modifierClass'

describe('Utils', () => {
  describe('modifierClass()', () => {
    it('should return the className preceded by a dash', () => {
      expect(modifierClass('abc')).toEqual('-abc')
    })
  })
})
