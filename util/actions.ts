import { createPostMutation } from "@/graphql";
import { GraphQLClient } from "graphql-request";

const isProduction = process.env.NODE_ENV === "production";
const apiUrl = isProduction ? process.env.GRAFBASE_API_ENDPOINT || '' : 'http://127.0.0.1:4000/graphql';
const apiKey = isProduction ? process.env.GRAFBASE_API_KEY : '789';
const serverUrl = isProduction ? process.env.PUBLIC_SERVER_URL : 'http://localhost:3000';
const client = new GraphQLClient(apiUrl);

const makeGraphQLRequest = async (query: string, variables = {}) => {
    try {
        return await client.request(query, variables)
    } catch (error) {
        throw error;
    }
}


export const getPost = () => {

}

export const uploadImage = async (imagePath: string) => {
    try {
        const response = await fetch(`${serverUrl}/api/upload`, {
            method: 'POST',
            body: JSON.stringify({ path: imagePath })
        })

        return response.json();
    } catch (error) {
        throw error;
    }
}

interface PostForm {
    title: string;
    content: string;
    image: string;
    category: string;
}

export const createPost = async (form: PostForm) => {
    const imageUrl = await uploadImage(form.image);

    if (imageUrl.url) {
        const variables = {
            input: {
                ...form,
                image: imageUrl.url,
                
            }
        }
        return makeGraphQLRequest(createPostMutation, variables)
    } 
}