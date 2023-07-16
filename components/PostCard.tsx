import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    id: string;
    image: string;
    title: string;
}

const PostCard = ({ id, image, title }: Props) => {
    return (
        <div className="flex justify-center border-2 border-purple-300 max-w-md">
            <Link href={`/post/${id}`}>
                <Image 
                    src={image}
                    width={414}
                    height={414}
                    alt={title}
                />
            </Link>
        </div>
    )
}

export default PostCard