import languages from "./consts/languages"
import getFirst from "./utils/getFirst"
const isoToHebrew = (isoCode: string, defaultValue: string = ""): string => {
  const languageCode = getFirst(isoCode, "-")

  let language = languages[languageCode]
  language = getFirst(language)

  if (!language) {
    return defaultValue
  }

  return language
}

export default isoToHebrew
