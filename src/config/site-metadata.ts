import { renderWord } from "@/components/PsalmsHeader"
import { SiteConfig } from "./config"

const word = "Psalms"

export const siteMetadata: SiteConfig = {
    title: `${renderWord(word)}Blog`,
    author: "Sammy Musyoki",
    description: 'Discover my personal website, where I showcase my coding skills and expertise in software engineering. Explore a range fo innovative software tools, blog posts, and projects showcases that demonstrate my passion for problem-solving and creativity in this rapidly changing field of tech.',
    language: "en-us",
    theme: 'system',
    siteUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://sammy-musyoki.vercel.app",
    siteRepo: "https://github.com/SammyMusyoki/Portofolio-new",
    email: 'sammymusyoki328@gmail.com',
    twitter: "https://x.com/SammyM_dev",
    github: "https://github.com/SammyMusyoki",
    linkedin: 'https://linkedin.com/in/sammy-musyoki-293b451bb',
    locale: 'en-KE',
    giscusConfig: {
        repo: process.env.NEXT_PUBLIC_GISCUS_REPO ?? "",
        repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID ?? "",
        category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY ?? "",
        categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ?? "",
        mapping: "pathname",
        reactions: "1",
        metadata: "0",
        inputPosition: "top",
        theme: "light",
        darkTheme: "transparent_dark",
        themeURL: "",
        lang: "en",
  },

}

export default siteMetadata