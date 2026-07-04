"use client"
import { useToken } from "@/providers/token-provider";
import { useRouter } from "next/navigation";
const Dashboard = () => {

    const { loading, token } = useToken();
    console.log(token)
    const router = useRouter();
    if (loading) return "cargando"
    if (!token) {
        router.push("/login")
    }
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard;