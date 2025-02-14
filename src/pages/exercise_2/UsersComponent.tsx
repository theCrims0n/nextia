import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { Spinner } from "../../components/spinner/Spinner";
import { Form } from "../../components/form/Form";
import { getUsersId } from "../../actions/users/get-users-id";

export default function UsersComponent() {

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
                    !data ? <span>Usuario no existe</span> : <Form user={data} />
            }

        </div>
    )

}