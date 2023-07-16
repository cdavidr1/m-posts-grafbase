import { PostInterface } from "@/common.types";
import PostCard from "@/components/PostCard";
import { fetchAllPosts } from "@/util/actions";

type PostSearch = {
    postSearch: {
        edges: { node: PostInterface }[];
        pageInfo: {
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor: string;
            endCursor: string;
        }
    }
}

const Home = async () => {
    const data =  await fetchAllPosts() as PostSearch;

    const posts = data?.postSearch?.edges || [];

    if (posts.length === 0) {
        return <section>No posts found!</section>
    }

    return (
    <section className='flex flex-col'>
        <h1>Categories</h1>
        <section className="">
            {posts.map(({node}:{node:PostInterface}) => (
                <PostCard 
                    key={node?.id}
                    id={node?.id}
                    image={node?.image}
                    title={node?.title}
                />
            ))}
        </section>
        <h1></h1>
    </section>
    )
}

export default Home;