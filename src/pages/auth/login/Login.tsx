import { useForm } from "react-hook-form"
import { useAuthStore } from "../../../store/login-store"
import { useTransition } from "react"
import { Spinner } from "../../../components/spinner/Spinner"
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const { login } = useAuthStore()
    const [isLoading, setIsLoading] = useTransition()
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const onSubmit = async (data: any) => {

        setIsLoading(async () => {
            await login(data)
        })
        if (!isLoading) {
            navigate('/')
        }

    }

    return (

        <div className="flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8 md:w-[100svh] md:h-[80svh]">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 " action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 text-start">Correo</label>
                        <div className="mt-2">
                            <input {...register('email', { required: true })} type="email" name="email" id="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Contraseña</label>
                        </div>
                        <div className="mt-2">
                            <input {...register('password', { required: true })} type="password" name="password" id="password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <button disabled={isLoading} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{isLoading ? <Spinner size={20} /> : 'Login'}</button>
                    </div>
                </form>
            </div>
        </div>

    )
}