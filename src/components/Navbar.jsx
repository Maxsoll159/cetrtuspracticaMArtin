import React, { useContext } from 'react'
import { UsuarioContext } from '../context/ContextApp'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const { usuario} = useContext(UsuarioContext)
    const navigation = useNavigate()
    const logout = () =>{
        localStorage.removeItem("nombre")
        navigation("/", {replace: true})
    
    }

  return (
    <div>
        SOY EL NAVBAR {usuario}
        <button onClick={logout}>Salir</button>
    </div>
  )
}
