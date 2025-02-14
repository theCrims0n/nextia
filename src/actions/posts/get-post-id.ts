'use server';

import axios from "axios";

export const getPostId = async (id: number = 0) => {
    try {

        const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

        if (result.status !== 200) {
            return
        }

        return result.data

    } catch (error) {
        console.log(error);
        throw new Error('Error con los posts');
    }

}