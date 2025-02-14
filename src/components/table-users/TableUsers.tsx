'use client'

import { ExclamationCircleIcon } from "@heroicons/react/16/solid"
import { Users } from "../../interfaces/users"
import { Link } from "react-router-dom"

type User = {
    users: Users[]
}

export const TableUsers = ({ users }: User) => {
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg box-shadow-card fade-in">
            <table className=" text-sm text-left rtl:text-right">
                <thead className="text-xs text-gray-700 uppercase bg-zinc-950 text-white">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Telefono
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Sitio Web
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ver Detalle
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={index} className="text-black  font-normal dark:border-gray-700 border-gray-200 md:text-sm text-[10px]">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {user.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {user.phone}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.website}
                                    </td>
                                    <td className="px-6 py-4 flex justify-center">
                                        <Link to={`/users/details/${user.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><ExclamationCircleIcon className="size-6 text-zinc-800 hover:text-zinc-600 animation duration-300 ease-in-out" /></Link>
                                    </td>
                                </tr>

                            )
                        })
                    }

                </tbody>
            </table>
        </div>

    )
}