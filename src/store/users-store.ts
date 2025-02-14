import { create } from 'zustand'
import axios from 'axios';

type Props = {
    user: any;
    getUsers: (id: number) => void;
}

export const useUsers = create<Props>()((set) => ({
    user: {},
    getUsers: async (id) => {
        try {

            const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

            if (result.status !== 200) {
                set({ user: {} })
            }

            set({ user: result.data })

        } catch (error) {
            console.log(error);
            throw new Error('Error with this product');
        }

    },

}));