import { generateStyles } from "./Styles"
import AdditionalThemes from "../data/AdditionalThemes.json"

export const lightTheme = generateStyles({}) // default

export const getAdditionalStyle = (name) => {
    return generateStyles(AdditionalThemes[name] || {})
}
