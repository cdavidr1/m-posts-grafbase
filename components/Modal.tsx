"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const Modal = ({ children }: { children: React.ReactNode }) => {

    const overlay = React.useRef<HTMLDivElement>(null);
    const wrapper = React.useRef<HTMLDivElement>(null);
    const router = useRouter();

    const close = React.useCallback(() => {
        router.push('/');
    }, [router]);

    const outerClose = React.useCallback((e: React.MouseEvent) => {
        if ((e.target === overlay.current) && close) {
            close();
        }
    }, [close, overlay]);


    return (
        <div ref={overlay} className='
            fixed 
            z-10 left-0 right-0 top-0 bottom-0 
            mx-auto
            bg-black/80' onClick={outerClose}>
            <button type='button'
                className='z-20 absolute top-8 right-8'
                onClick={close}>
                X
            </button>
            <div ref={wrapper}
                className='z-0 flex 
            justify-start items-center flex-col 
            absolute h-[95%] w-full bottom-0 
            bg-white 
            rounded-t-2xl 
            lg:px-40 px-8 pt-14 pb-72 
            overflow-auto'>
                {children}
            </div>
        </div>
    )
}

export default Modal