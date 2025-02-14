import { create } from 'zustand'


type Props = {
    count: number;
    counteradd: () => void;
    countersubtract: () => void;
}

export const useCounter = create<Props>()((set) => ({
    count: 1,
    counteradd() {
        set((state) => ({ count: state.count + 1 }))
    },
    countersubtract() {
        set((state) => ({ count: state.count > 0 ? state.count - 1 : state.count }))
    },

}));