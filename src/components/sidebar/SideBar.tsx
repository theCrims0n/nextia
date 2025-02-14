import clsx from "clsx";
import { useUIStore } from "../../store/sidebar-store";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

export const SideBar = () => {

    const { isSideMenuOpen, closeSideMenu } = useUIStore();

    return (
        <div className="md:hidden lg:block w-full">
            <div>
                {isSideMenuOpen && (
                    <div className="fixed top-0 left-0 w-screen h-screen z-10" />
                )}
                {isSideMenuOpen && (
                    <div
                        onClick={() => closeSideMenu()}
                        className="fade-in fixed top-0 left-0 w-screen h-screen z-10 "
                    />
                )}
                <nav
                    className={clsx(
                        " fixed p-5 left-0 top-0 sm:w-[350px] w-[250px] h-screen box-shadow-card z-20 shadow-2xl transform transition-all duration-300",
                        !isSideMenuOpen ? "-translate-x-full" : 'translate-x-0'
                    )}
                >
                    <XMarkIcon
                        className="absolute top-5 right-5 cursor-pointer size-10 text-sm text-zinc-950"
                        onClick={() => closeSideMenu()}
                    />
                    <div className="flex flex-col gap-1 my-14">
                        <Link onClick={() => closeSideMenu()} to="/" className="flex items-center pl-2 pl-2 h-14 mr-1 ml-1 hover:mr-0 hover:ml-0 rounded-lg bg-zinc-950 border border-zinc-300  rounded transition-all">
                            <span className="antialiased font-bold text-sm text-white">
                                Home
                            </span>
                        </Link>
                        <Link onClick={() => closeSideMenu()} to="/exercise_1" className="flex items-center pl-2 pl-2 h-14 mr-1 ml-1 hover:mr-0 hover:ml-0 rounded-lg bg-zinc-950 border border-zinc-300  rounded transition-all">
                            <span className="antialiased font-bold text-sm text-white">
                                Ejercicio 1
                            </span>
                        </Link>
                        <Link onClick={() => closeSideMenu()} to="/exercise_2/1" className="flex items-center pl-2 pl-2 h-14 mr-1 ml-1 hover:mr-0 hover:ml-0 rounded-lg bg-zinc-950 border border-zinc-300 rounded transition-all">
                            <span className="antialiased font-bold text-sm text-white">
                                Ejercicio 2
                            </span>
                        </Link>
                        <Link onClick={() => closeSideMenu()} to="/exercise_3" className="flex items-center pl-2 pl-2 h-14 mr-1 ml-1 hover:mr-0 hover:ml-0 bg-zinc-3 rounded-lg bg-zinc-950 border border-zinc-300  rounded transition-all">
                            <span className="antialiased font-bold text-sm text-white">
                                Ejercicio 3
                            </span>
                        </Link>
                        <Link onClick={() => closeSideMenu()} to="/users/list" className="flex items-center pl-2 pl-2 h-14 mr-1 ml-1 hover:mr-0 hover:ml-0  bg-zinc-950 rounded-lg  border border-zinc-300  rounded transition-all">
                            <span className="antialiased font-bold text-sm text-white">
                                Usuarios
                            </span>
                        </Link>
                        <Link onClick={() => closeSideMenu()} to="/posts/list" className="flex items-center pl-2 pl-2 h-14 mr-1 ml-1 hover:mr-0 hover:ml-0  bg-zinc-950 border  border-zinc-300  rounded rounded-lg transition-all">
                            <span className="antialiased font-bold text-sm text-white">
                                Posts
                            </span>
                        </Link>

                    </div>
                </nav>
            </div >
        </div >
    )

}