import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid"
import { useCounter } from "../../store/counter-store"

export const Counter = () => {

    const { count, counteradd, countersubtract } = useCounter()

    return (
            <div className="flex flex-col justicy-center items-center space-y-2 box-shadow-card">
                <span className="md:text-[100px] text-[80px]">{count}</span>
                <div className="flex md:flex-row flex-col gap-3">
                    <button className="flex flex-row md:w-[200px] w-full justify-center items-center gap-4 btn-primary" onClick={counteradd}>
                        Agregar 1
                        <ChevronUpIcon className="size-6 text-zinc-300" />
                    </button>
                    <button className="flex flex-row md:w-[200px] w-full justify-center items-center gap-4 btn-primary" onClick={countersubtract}>
                        Restar 1
                        <ChevronDownIcon className="size-6 text-zinc-300" />
                    </button>
                </div>
            </div>
    )

}