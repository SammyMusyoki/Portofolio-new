import { useCallback, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import type { GiscusConfig } from "@/types/types";
import Giscus from "@giscus/react"

export type GiscusProps = GiscusConfig

// Used for Github Discussions => comments and reactions on my site via Github.
// Install => npm i @giscus/react
export const GiscusContainer = ({
  themeURL,
  theme,
  darkTheme,
  repo,
  repositoryId,
  category,
  categoryId,
  reactions,
  metadata,
  inputPosition,
  lang,
  mapping,
}: GiscusProps) => {
    const {theme: nextTheme, resolvedTheme} = useTheme()

    const commentsTheme = themeURL === "" ? nextTheme === 'dark' || resolvedTheme === 'dark' ? darkTheme : theme : themeURL

    const COMMENTS_ID = "comments-container"

    const LoadComments = useCallback(() => {
        const script = document.createElement("script")

        script.src = "https://giscus.app/client.js"
        script.setAttribute("data-repo", repo)
        script.setAttribute("data-repo-id", repositoryId)
        script.setAttribute("data-category", category)
        script.setAttribute("data-category-id", categoryId)
        script.setAttribute("data-mapping", mapping)
        script.setAttribute("data-reactions-enabled", reactions)
        script.setAttribute("data-emit-metadata", metadata)
        script.setAttribute("data-input-position", inputPosition ?? "bottom")
        script.setAttribute("data-theme", commentsTheme ?? "dark")
        script.setAttribute("data-lang", lang)
        script.setAttribute("crossorigin", "anonymous")
        script.setAttribute("data-logging", "strict");
        script.async = true

        const comments = document.getElementById(COMMENTS_ID)
        if (comments) comments.appendChild(script)

        return () => {
            const comments = document.getElementById(COMMENTS_ID)
            if (comments) comments.innerHTML = ""
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [commentsTheme])

    useEffect(() => {
        LoadComments()
    }, [LoadComments])

    return <div className="giscus" id={COMMENTS_ID} />
};