import { useMemo, useState, useTransition } from "react";
import { useForm } from 'react-hook-form'
import { usePosts } from "../../../store/posts-store";
import { Spinner } from "../../../components/spinner/Spinner";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPostId } from "../../../actions/posts/get-post-id";
import { getUsers } from "../../../actions/users/get-users";

export const EditPost = () => {
    const { id } = useParams()
    const [data, setData] = useState<any>(null);
    const [users, setUsers] = useState<any>(null);
    const [isLoading, setIsLoading] = useTransition()
    const { register, handleSubmit } = useForm()
    const { savePosts } = usePosts()
    const navigate = useNavigate()

    useMemo(() => {

        const fetchinData = async () => {
            const users = await getUsers()
            const result = await getPostId(Number(id))
            setData(result)
            setUsers(users)
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
        <div className="flex flex-col space-y-2">
            <Link to={'/posts/list/1'} className="btn-primary w-40 flex justify-center items-center">Volver al listado</Link>
            {
                !data
                    ?
                    <Spinner size={50} />
                    :

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-start items-start box-shadow-card md:w-[800px] md:h-[600px] w-[500px] h-[400px] space-y-2 fade-in">
                        <label htmlFor="userId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                        <select defaultValue={data.userId} {...register('userId', { required: true })} className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-zinc-100">
                            {users?.map((user: any, index: number) => {
                                return (
                                    <option value={Number(user.id)} key={index}>{user.name}</option>
                                )
                            })}
                        </select>
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulo</label>
                        <input defaultValue={data.title} placeholder="Titulo..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" {...register('title', { required: true })} />
                        <label htmlFor="body" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post</label>
                        <textarea defaultValue={data.body} {...register('body', { required: true })} className="h-96 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-zinc-100" placeholder="Escribe un post..." />
                        <button disabled={isLoading} type="submit" className="btn-primary w-full">{isLoading ? <Spinner size={20} /> : 'Editar'}</button>
                    </form>
            }
        </div>
    )

}