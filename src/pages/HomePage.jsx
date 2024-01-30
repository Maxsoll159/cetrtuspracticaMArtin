import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UsuarioContext } from "../context/ContextApp"


export const HomePage = () => {
    const navigation = useNavigate()



    const { usuario, setUsuario } = useContext(UsuarioContext)


    const handreChange = (e) => {
        setUsuario(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        if (usuario.length > 0) {
            localStorage.setItem("nombre", usuario)
            navigation("/personajes", { replace: true })
        }
    }



    return (
        <div>
            <form action="" onSubmit={handleLogin}>
                <p>Ingresa tu nombre</p>
                <input type="text" onChange={handreChange} value={usuario} />
                <button>ENVIATR</button>
            </form>

        </div>
    )
}
