import { toKebabCase } from '@ui/utils/toKebabCase'

describe('Utils', () => {
  describe('toKebabCase()', () => {
    it('should convert string from camel case to kebab case', () => {
      expect(toKebabCase('exampleCamelCase')).toEqual('example-camel-case')
    })

    it('should convert string from underscore case to kebab case', () => {
      expect(toKebabCase('example_underscore_case', 'underscore')).toEqual(
        'example-underscore-case',
      )
    })
  })
})
