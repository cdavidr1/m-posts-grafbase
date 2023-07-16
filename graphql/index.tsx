export const getPostByIdQuery = `
  query GetPostById($id: ID!) {
    post(by: { id: $id }) {
      id
      title
      content
      image
      category
    }
  }
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

export const postsQuery = `
  query getPosts($category: String, $endcursor: String) {
    postSearch(first: 8, after: $endcursor, filter: {category: {eq: $category}}) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          title
          content
          id
          image
          category
        }
      }
    }
  }
`;