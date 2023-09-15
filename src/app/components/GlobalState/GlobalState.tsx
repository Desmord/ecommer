'use client'
import { GlobalContext } from "@/app/context"

const GlobalState = ({ children }: { children: any }) => {
    return (
        <GlobalContext.Provider value={null}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState