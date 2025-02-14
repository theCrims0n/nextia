import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUsersId } from "../../../actions/users/get-users-id";
import { Form } from "../../../components/form/Form";
import { Spinner } from "../../../components/spinner/Spinner";

export const UserDetails = () => {

    const { id } = useParams()
    const [data, setData] = useState<any>(null);

    useMemo(() => {

        const fetchinData = async () => {
            const result = await getUsersId(Number(id))
            setData(result)
        }

        fetchinData()
    }, [id])


    return (
        <div >
            {
                !data
                    ?
                    <Spinner size={50} />
                    :
                    !data ? <span>Usuario no existe</span> :
                        <div className="flex flex-col gap-4">
                            <Link to='/users/list' className="flex justify-start"><button className="btn-primary md:w-52 w-full">Volver al listado</button></Link>
                            <Form user={data} />
                        </div>
            }

        </div>
    )

}