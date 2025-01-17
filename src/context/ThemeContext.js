import { createContext, useContext, useState } from "react";

const Theme = createContext()

export function ThemeProvider ({children}){
    const [Ison, setIson] = useState(true)
    function toggle(){
        setIson(!Ison)
    }
    return <Theme.Provider value={{toggle,Ison}}>
        {children}
    </Theme.Provider>
}

export function useTheme(){
    return useContext(Theme)
}