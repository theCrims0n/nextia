import { useMemo, useState } from "react";
import { getPosts } from "../../../actions/posts/get-posts";
import { Spinner } from "../../../components/spinner/Spinner";
import { TablePosts } from "../../../components/table-posts/TablePosts";
import { Pagination } from "../../../components/pagination/Pagination";
import { Link, useParams } from "react-router-dom";

export const PostsList = () => {
    const { id } = useParams()
    const page = Number(id) ?? 1
    const [data, setData] = useState<any>(null);
    const [totalPages, setTotalPages] = useState(0);
    useMemo(() => {

        const fetchinData = async () => {
            const { posts, totalPages }: any = await getPosts({ page })
            setData(posts)
            setTotalPages(totalPages)
        }
        fetchinData()
    }, [id])

    return (
        <div className="pt-12 space-y-2">
            <Link to={'/posts/register'} className="flex justify-center items-center btn-primary w-40">Crear post</Link>
            {
                !data
                    ?
                    <Spinner size={50} />
                    :
                    !data ? <span>Posts no existen</span> :
                        <>
                            <TablePosts posts={data} />
                            <Pagination totalPages={totalPages} page={Number(page)} />
                        </>
            }
        </div>
    )
}