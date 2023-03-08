const getFirst = (text: string, separator: string = ","): string =>
  text.split(separator)[0].trim()

export default getFirst
