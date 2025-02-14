import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { generatePaginationNumbers } from '../../utils/generationaginationNumbers';


interface Props {
    totalPages: number;
    page : number
}

export const Pagination = ({ totalPages, page }: Props) => {

    const location = useLocation().pathname.toString().split('/')
    const pathname = '/' + location[1] + '/' + location[2]
    const pageString = page ?? 1;
    const currentPage = isNaN(+pageString) ? 1 : +pageString;
    const allPages = generatePaginationNumbers(page, totalPages);

    const createPageUrl = (pageNumber: number | string) => {

        const params = pageNumber;

        if (pageNumber === '...') {
            return `${pathname}/${page}`
        }

        if (+pageNumber <= 0) {
            return `${pathname}/1`;
        }

        if (totalPages <= 0) {
            return `${pathname}/1`;
        }

        if (+pageNumber > totalPages) {
            return `${pathname}/${page}`;
        }
        return `${pathname}/${params}`;
    }

    return (
        <div className="flex justify-center items-center space-x-1 mt-10 mb-32 pr-2 fade-in">
            <Link to={createPageUrl(currentPage - 1)} className="md:w-24 w-16 rounded-md border border-zinc-300 py-2 px-3 text-center text-xs lg:text-sm transition-all shadow-sm hover:shadow-lg text-zinc-600 hover:text-white hover:bg-zinc-800 hover:border-zinc-800 focus:text-white focus:bg-zinc-800 focus:border-zinc-800 active:border-zinc-800 active:text-white active:bg-zinc-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                Anterior
            </Link>
            {
                allPages.map((page, index) => (
                    <Link key={index} to={createPageUrl(page)} className={clsx("md:w-12 text-white w-8 animation duration-300 ease-in-out rounded-md bg-zinc-800 py-2 px-3 border border-transparent text-center text-xs lg:text-sm transition-all shadow-md hover:shadow-lg focus:bg-zinc-700 focus:shadow-none active:bg-zinc-700 hover:bg-zinc-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2", currentPage === page && 'bg-zinc-600')}>
                        {page}
                    </Link>
                ))
            }
            <Link to={createPageUrl(currentPage + 1)} className="md:w-24 w-16 rounded-md border border-zinc-300 py-2 px-3 text-center text-xs lg:text-sm transition-all shadow-sm hover:shadow-lg text-zinc-600 hover:text-white hover:bg-zinc-800 hover:border-zinc-800 focus:text-white focus:bg-zinc-800 focus:border-zinc-800 active:border-zinc-800 active:text-white active:bg-zinc-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                Siguiente
            </Link>
        </div >
    );
};
