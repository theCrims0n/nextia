import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../../store/login-store"

export const AuthProtected = () => {

    const { isAuthentic } = useAuthStore()

    console.log(isAuthentic)

    if (isAuthentic) {
        return (
            <Navigate to={'/'} />
        )
    }

    return (

        <Outlet />

    )
}