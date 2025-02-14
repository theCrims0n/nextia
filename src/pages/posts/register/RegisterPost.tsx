import { useMemo, useState, useTransition } from "react";
import { getUsers } from "../../../actions/users/get-users";
import { useForm } from 'react-hook-form'
import { usePosts } from "../../../store/posts-store";
import { Spinner } from "../../../components/spinner/Spinner";
import { useNavigate } from "react-router-dom";

export const RegisterPost = () => {

    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useTransition()
    const { register, handleSubmit } = useForm()
    const { savePosts } = usePosts()
    const navigate = useNavigate()

    useMemo(() => {

        const fetchinData = async () => {
            const result = await getUsers()
            setData(result)
        }

        fetchinData()
    }, [])

    const onSubmit = async (data: any) => {
        setIsLoading(async () => {
            await savePosts(data)
        })
        if (!isLoading) {
            navigate('/posts/list/1')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-start items-start box-shadow-card md:w-[800px] md:h-[600px] w-[500px] h-[400px] space-y-2">
            <label htmlFor="userId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
            <select {...register('userId', { required: true })} className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-zinc-100">
                {data?.map((user: any, index: number) => {
                    return (
                        <option value={Number(user.id)} key={index}>{user.name}</option>
                    )
                })}
            </select>
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulo</label>
            <input placeholder="Titulo..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" {...register('title', { required: true })} />
            <label htmlFor="body" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post</label>
            <textarea {...register('body', { required: true })} className="h-96 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-zinc-100" placeholder="Escribe un post..." />
            <button disabled={isLoading} type="submit" className="btn-primary w-full">{isLoading ? <Spinner size={20} /> : 'Guardar'}</button>
        </form>
    )

}