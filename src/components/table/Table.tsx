import { Users } from "../../interfaces/users"

type User = {
    users: Users[]
}

export const Table = ({ users }: User) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg box-shadow-card">
            <table className=" text-sm text-left rtl:text-right ">
                <thead className="text-xs uppercase bg-zinc-950 text-white">
                    <tr>
                        <th scope="col" className="px-6 py-3 md:text-sm text-[10px] ">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3 md:text-sm text-[10px]">
                            Telefono
                        </th>
                        <th scope="col" className="px-6 py-3 md:text-sm text-[10px]">
                            Sitio Web
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={index} className="text-black  font-normal dark:border-gray-700 border-gray-200 md:text-sm text-[10px]">
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                        {user.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {user.phone}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.website}
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