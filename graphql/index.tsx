export const getPostQuery = `
    query GetPost()
`;


export const getCommentQuery = `
    query getComment()
`;

export const createPostMutation = `
    mutation CreatePost($input: PostCreateInput!) {
        postCreate(input: $input) {
            post {
                id
                title
                content
            }
        }
    }
`