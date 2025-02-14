'use server';

import axios from "axios";

interface PaginationOptions {
    page?: number;
    limit?: number;
}

export const getPosts = async ({
    page = 1,
    limit = 10,
}: PaginationOptions) => {
    try {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/`)

        if (result.status !== 200) {
            return
        }
        const user = await axios.get(`https://jsonplaceholder.typicode.com/users/`)

        if (user.status !== 200) {
            return
        }
        const totalCount = result.data.length
        const totalPages = Math.ceil(totalCount / limit);
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const posts = result.data.slice(startIndex, endIndex)
        return {
            currentPage: page,
            totalPages: totalPages,
            posts: posts?.map((post: any) => ({
                userId: post.userId,
                id: post.id,
                title: post.title,
                body: post.title,
                user : user.data.filter((f : any) => f.id === post.userId)[0].name ?? ''
            })),
        };

    } catch (error) {
        console.log(error);
        throw new Error('Error con los posts');
    }

}