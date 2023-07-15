"use client";
import Modal from '@/components/Modal';
import PostForm from '@/components/PostForm';
import { getCurrentWalletConnected } from '@/util/interact';
import { useRouter } from 'next/navigation';
import React from 'react';

const CreatePost = () => {
    const { push } = useRouter();

    React.useEffect(() => {
        async function checkAdmin() {
            const { address } = await getCurrentWalletConnected();
            if (address !== process.env.NEXT_PUBLIC_ADMIN_ADDRESS) {
                console.log("Not admin!")
                push('/');
            }
        }
        checkAdmin();
    }); 

    return (
        <Modal>
            <h1 className='text-6xl font-extrabold'>Admin Panel</h1>
            <h2 className='text-4xl'>Create New Post</h2>

            <PostForm type="create" />
        </Modal>
    )
}

export default CreatePost;