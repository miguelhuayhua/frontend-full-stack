"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic" // 1. Importa 'dynamic' de Next.js
import { Spinner } from "@/components/ui/spinner"


// 2. Importa el cliente dinámicamente desactivando el SSR (Server-Side Rendering)
const Client = dynamic(() => import("./client"), {
    ssr: false,
})

const Page = () => {
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-screen"><Spinner /></div>}>
            <Client />
        </Suspense>
    )
}

export default Page
