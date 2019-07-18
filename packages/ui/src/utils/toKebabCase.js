export const toKebabCase = (string, from = 'camel') => {
  const regExp = from === 'camel' ? /([A-Z])/g : /_([a-zA-Z])/g
  return string.replace(regExp, (_, p) => '-' + p.toLowerCase())
}
