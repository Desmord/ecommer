'use client'
import { createContext } from "react";

export const GlobalContext = createContext<({
    showNavModal: boolean
    setShowNavModal: React.Dispatch<React.SetStateAction<boolean>>
})>({
    showNavModal: false,
    setShowNavModal: () => { }
})

