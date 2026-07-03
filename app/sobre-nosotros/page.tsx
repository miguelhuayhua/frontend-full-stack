"use client"
import { useState } from "react";
import Formulario from "./formulario";

const MiPagina = () => {

    const [contador, setContador] = useState({ nombre: "Miguel", edad: 30 });

    return (
        <div>
            <p>
                sobre nosotros actualizado
            </p>

            <button onClick={() => {

                setContador(prev => ({ nombre: "Luis", edad: 50 }))

            }}>
                Contador {contador.nombre} {contador.edad}
            </button>
            <Formulario />
        </div>
    )
}



export default MiPagina;