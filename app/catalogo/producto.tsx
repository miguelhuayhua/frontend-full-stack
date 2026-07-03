import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface producto {
    nombre: string
    precio: number
    descuento: boolean
    descripcion: string
    imagen?: string
}


const ProductoComponent = ({ prod }: { prod: producto }) => {


    return <Card size="sm" className="mx-auto w-full max-w-sm">
        <CardHeader>
            <CardTitle>
                {prod.nombre}
            </CardTitle>
            <CardDescription>
                {prod.descripcion}
            </CardDescription>
        </CardHeader>
        <CardContent>
            <p>
                The card component supports a size prop that can be set to
                &quot;sm&quot; for a more compact appearance.
            </p>
        </CardContent>
        <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
                Comprar por {prod.precio} USD
            </Button>
        </CardFooter>
    </Card>

}


export default ProductoComponent;