import { createContext, useEffect, useState } from "react"

export const UsuarioContext = createContext()


export const AppContext = ({ children }) => {
    const [usuario, setUsuario] = useState("")

    useEffect(()=>{
        const user = localStorage.getItem("nombre")
        if(user){
            setUsuario(user)
        }
    }, [])

   



    return (
        <UsuarioContext.Provider value={{usuario, setUsuario}}>
            {children}
        </UsuarioContext.Provider>
    )
}
