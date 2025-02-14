import { Navigate, Outlet } from "react-router-dom"
import { NavBar } from "../../components/navbar/NavBar"
import { SideBar } from "../../components/sidebar/SideBar"
import { useAuthStore } from "../../store/login-store"

export const Protected = () => {

    const { isAuthentic } = useAuthStore()

    if (!isAuthentic) {
        return (
            <Navigate to={'/auth/login'} />
        )
    }

    return (
        < >
            <div className="flex flex-col justify-start md:items-center items-start">
                <NavBar />
                <SideBar />
            </div>
            <div className="flex min-h-screen m-0 p-0 justify-center items-center ">
                <Outlet />
            </div>
        </>
    )
}