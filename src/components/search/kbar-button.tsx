import { Priority, useKBar, useRegisterActions } from "kbar"
import { useTheme } from "next-themes"
import { useMemo } from "react"
import SearchBarBtn from "./search-bar-btn"

interface KBarButtonProps {
    loaded: boolean
    onOpen: () => void
}

const ACTION_KEY_DEFAULT = "CTRL"
const ACTION_KEY_APPLE = "⌘"

function isAppleDevice() {
    return /(Mac|iPhone|iPod|iPad)/!.test(navigator.platform)
}

export const KBarButton = ({ loaded, onOpen }: KBarButtonProps) => {
    const context = useKBar()
    const key = useMemo(() => {
        if (typeof navigator !== "undefined") {
            return isAppleDevice() ? ACTION_KEY_APPLE : ACTION_KEY_DEFAULT
        }
    }, [])

    const { theme, setTheme, resolvedTheme } = useTheme()

   useRegisterActions(
     [
       {
         id: "theme",
         name: "Toggle Theme",
         keywords: "toggle light mode dark theme",
         section: "Utils",
         perform: () =>
           setTheme(
             theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
           ),
         priority: Priority.HIGH,
       },
     ],
     [theme, resolvedTheme, setTheme]
   );

    return (
        <SearchBarBtn 
        onClick={() => {
            if (!loaded) {
                onOpen()
                context.query.toggle()
                return
            }
            context.query.toggle()
        }}
        kbd={key}
        />
    )
}