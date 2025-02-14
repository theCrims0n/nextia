import { useMemo, useState } from "react"
import { getUsers } from "../../../actions/users/get-users"
import { TableUsers } from "../../../components/table-users/TableUsers";
import { Spinner } from "../../../components/spinner/Spinner";

export const Users = () => {

    const [data, setData] = useState<any>(null);

    useMemo(() => {
        const fetchinData = async () => {
            const result = await getUsers()
            setData(result);
        }

        fetchinData();
    }, [])

    return (
        <div>
            {!data ? <Spinner size={50} /> : <TableUsers users={data} />}
        </div>
    )
}