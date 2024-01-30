import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../../context/ContextApp";
import { Navigate } from "react-router-dom";

export const PrivateRuter = ({ children }) => {
    const { usuario } = useContext(UsuarioContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [usuario]);

    if (loading) {
        return <p>Cargando...</p>;  // Puedes mostrar un spinner u otra indicación de carga
    }

    return usuario ? children : <Navigate to="/" />;
};