import { useMemo, useState } from "react";
import { getUsers } from "../../actions/users/get-users";
import { Spinner } from "../../components/spinner/Spinner";
import { Table } from "../../components/table/Table";

export const UserList = () => {

    const [data, setData] = useState<any>(null);

    useMemo(() => {

        const fetchinData = async () => {
            const result = await getUsers()
            setData(result)
        }

        fetchinData()
    }, [])

    return (
        <div >
            {
                !data
                    ?
                    <Spinner size={50} />
                    :
                    !data ? <span>Usuario no existe</span> : <Table users={data} />
            }

        </div>

    )
}