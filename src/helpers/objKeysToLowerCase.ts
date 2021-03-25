import srtFirstLetterToLower from './srtFirstLetterToLower'

const objKeysToLowerCase = (obj: Record<string, any>, firstLetterToLower = true) => {
  const tranformFunc = firstLetterToLower
    ? srtFirstLetterToLower
    : (str: string) => str.toLowerCase()

  return Object.entries(obj).reduce((accum: typeof obj, [key, value]) => {
    accum[tranformFunc(key)] = value
    return accum
  }, {})
}

export default objKeysToLowerCase
