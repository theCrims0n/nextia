import { Bars3Icon } from "@heroicons/react/16/solid"
import { useUIStore } from "../../store/sidebar-store";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/login-store";

export const NavBar = () => {

    const { openSideMenu, isSideMenuOpen } = useUIStore();
    const { logout } = useAuthStore();


    return (
        <div className="fixed top-0 z-40 justity-center items-center md:w-screen fade-in">
            <div className="block md:hidden pt-1 ">
                <button className={clsx(isSideMenuOpen && 'hidden')} onClick={() => openSideMenu()}>
                    <Bars3Icon className="size-6 text-zinc-300 " />
                </button>
            </div>
            <div className="hidden md:block w-full ">
                <nav className="h-16 p-2 px-5 flex justify-center items-center bg-zinc-900">
                    <div className=' flex justify-center items-center space-x-12'>
                        <div className="flex flex-row justify-center items-center gap-14 md:w-[1200px] w-full">
                            <Link to="/" className="group transition duration-300">
                                <span className="antialiased font-normal xl:text-[16px] text-[11px] text-white">
                                    Home
                                </span>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-zinc-300 pt-1"></span>
                            </Link>
                            <Link to="/exercise_1" className="group transition duration-300">
                                <span className="antialiased font-normal xl:text-[16px] text-[11px] text-white">
                                    Ejercicio 1
                                </span>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-zinc-300 pt-1"></span>
                            </Link>
                            <Link to="/exercise_2/1" className="group transition duration-300">
                                <span className="antialiased font-normal xl:text-[16px] text-[11px] text-white">
                                    Ejercicio 2
                                </span>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-zinc-300 pt-1"></span>
                            </Link>
                            <Link to="/exercise_3" className="group transition duration-300">
                                <span className="antialiased font-normal xl:text-[16px] text-[11px] text-white">
                                    Ejercicio 3
                                </span>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-zinc-300 pt-1"></span>
                            </Link>
                            <Link to="/users/list" className="group transition duration-300">
                                <span className="antialiased font-normal xl:text-[16px] text-[11px] text-white">
                                    Usuarios
                                </span>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-zinc-300 pt-1"></span>
                            </Link>
                            <Link to="/posts/list/1" className="group transition duration-300">
                                <span className="antialiased font-normal xl:text-[16px] text-[11px] text-white">
                                    Posts
                                </span>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-zinc-300 pt-1"></span>
                            </Link>

                        </div>
                        <div className="flex justify-end items-center">
                            <button className="btn-primary flex justify-center items-center" onClick={logout}>Salir</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}