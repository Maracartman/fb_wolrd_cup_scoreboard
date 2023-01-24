import { ReactElement, createContext, useContext } from "react";
import COPIES from 'src/config/copies.json'

export const defaultCopies = {
    homeCopy: "",
    awayCopy: "",
    scoreboardCopy: "",
    randomMatchCopy: "",
    endMatchCopy: ""
}

const TranslationsContext = createContext<typeof defaultCopies>(defaultCopies)

const TranslationsProvider =  ({children}: { children: ReactElement }) => <TranslationsContext.Provider value={COPIES}>{children}</TranslationsContext.Provider>

export const useTranslations = () => {
    return useContext(TranslationsContext)
}

export default TranslationsProvider
