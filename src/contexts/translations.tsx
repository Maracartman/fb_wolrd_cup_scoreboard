import { ReactElement, createContext, useContext } from "react";
import COPIES from 'src/config/copies.json'

export type TypeTranslationsContext = {
    homeCopy: string,
    awayCopy: string
}

const TranslationsContext = createContext<TypeTranslationsContext>({
    homeCopy: "",
    awayCopy: ""
})

const TranslationsProvider =  ({children}: { children: ReactElement }) => <TranslationsContext.Provider value={COPIES}>{children}</TranslationsContext.Provider>

export const useTranslations = () => {
    return useContext(TranslationsContext)
}

export default TranslationsProvider
