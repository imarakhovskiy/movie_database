import srtFirstLetterToLower from './srtFirstLetterToLower'

const objKeysToLowerCase = (obj, firstLetterToLower = true) => {
  const tranformFunc = firstLetterToLower
    ? srtFirstLetterToLower
    : (str) => str.toLowerCase()

  return Object.entries(obj).reduce((accum, [key, value]) => {
    accum[tranformFunc(key)] = value
    return accum
  }, {})
}

export default objKeysToLowerCase
