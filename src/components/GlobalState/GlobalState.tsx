'use client'
import { useState } from 'react'
import { GlobalContext } from '../../context/index'

const GlobalState = ({ children }: { children: any }) => {
    const [showNavModal, setShowNavModal] = useState<boolean>(false);

    return (
        <GlobalContext.Provider value={{ showNavModal, setShowNavModal }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState