import { PostInterface } from '@/common.types';
import { getPostDetails } from '@/util/actions';
import React from 'react';

const Post = async ({params: {id}}: {params: {id : string}}) => {

  const result = await getPostDetails(id) as {post?: PostInterface}

  if (!result?.post) {
    return <section>No post information found!</section>
  }

  return (
    <div>{result.post?.content}</div>
  )
}

export default Post