'use client'
import { GlobalContext } from '../../context/index'

const GlobalState = ({ children }: { children: any }) => {
    return (
        <GlobalContext.Provider value={null}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState