import { renderWord } from "@/components/PsalmsHeader"

const word = "Psalms"

export const siteConfig = {
    name: `${renderWord(word)}Blog`,
    author: "Sammy Musyoki",
    links: {
        X: "https://x.com/SammyM_dev",
        github: "https://github.com/SammyMusyoki",
        personalSite: "https://sammy-musyoki.vercel.app"
    }
}

export type SiteConfig = typeof siteConfig