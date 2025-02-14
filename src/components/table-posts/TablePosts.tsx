'use client'

import { PencilIcon } from "@heroicons/react/16/solid"
import { Link } from "react-router-dom"
import { Posts } from "../../interfaces/posts"

type Post = {
    posts: Posts[]
}

export const TablePosts = ({ posts }: Post) => {
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg box-shadow-card ">
            <table className=" text-sm text-left rtl:text-right lg:h-[75svh] lg:w-[100svh]">
                <thead className="text-xs text-gray-700 uppercase bg-zinc-950 text-white h-12">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Usuario
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Titulo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Post
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Editar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post, index) => {
                            return (
                                <tr key={index} className="border border-zinc-300 rounded rounded-lg text-black  font-normal md:text-sm text-[10px]">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {post.user}
                                    </th>
                                    <td className="px-6 py-4">
                                        {post.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        {post.body}
                                    </td>
                                    <td className="px-6 py-4 flex justify-center">
                                        <Link to={`/posts/edit/${post.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><PencilIcon className="size-6 text-zinc-800 hover:text-zinc-600 animation duration-300 ease-in-out" /></Link>
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