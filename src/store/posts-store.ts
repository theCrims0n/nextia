import { create } from 'zustand'
import axios from 'axios';

type Props = {
    posts: any;
    savePosts: (body: any) => void;
}

export const usePosts = create<Props>()((set) => ({
    posts: {},
    savePosts: async (body) => {
        try {

            const result = await axios.post(`https://jsonplaceholder.typicode.com/posts/`, body)
            console.log(result.data)
            set({ posts: result.data })

        } catch (error) {
            console.log(error);
            throw new Error('Error with this product');
        }

    },

}));