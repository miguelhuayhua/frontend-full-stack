"use client"
import { Button } from "@/components/ui/button";
import ProductoComponent from "./producto";
import { useState } from "react";

interface producto {
    nombre: string
    precio: number
    descuento: boolean
    descripcion: string
    imagen?: string
}

const Catalogo = () => {
    const [productos, setProductos] = useState<producto[]>([
        {
            nombre: "Paracetamol",
            descripcion: "Esta es la descripción",
            descuento: true,
            precio: 30
        },
        {
            nombre: "Ibuprofeno",
            descripcion: "Esta es la descripción",
            descuento: true,
            precio: 20
        },
        {
            nombre: "Aspirina",
            descripcion: "Esta es la descripción",
            descuento: true,
            precio: 15
        }
    ])

    fetch("https://dominio.com/usuario/listar", {
        method: "DELETE", headers: {
            "authorization": "Bearer token"
        }
    }).then((r) => {
        console.log(r)
    }).catch((e) => {
        console.log(e)
    })

    return (
        <div>
            <h1 className="text-sky-500 font-bold">
                Catalogo
            </h1>
            {
                productos.map((producto, index) => {
                    return (<ProductoComponent key={producto.nombre} prod={producto} />)
                })
            }

            <Button onClick={() => {
                setProductos(prev => ([...prev, { nombre: "nuevo", descripcion: "nuevo", descuento: false, precio: 20 }]))
            }}>
                Añadir nuevo producto
            </Button>

        </div>
    )
}

export default Catalogo;