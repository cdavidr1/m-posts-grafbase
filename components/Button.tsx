import React, { MouseEventHandler } from 'react'

type Props = {
    title: string;
    leftIcon?: string | null;
    rightIcon?: string | null;
    handleClick?: MouseEventHandler;
    isSubmitting?: boolean;
    type?: 'button' | 'submit';
    bgColor?: string;
    textColor?: string;
}

const Button = ({ title, leftIcon, rightIcon, handleClick, isSubmitting, type, bgColor, textColor }: Props) => {
    return (
        <button
            type={type || 'button'}
            disabled={isSubmitting}
            className={`flex items-center justify-center gap-3 px-4 py-3
            ${textColor || 'text-white'}
            ${bgColor}`}
            onClick={handleClick}
        >
            {leftIcon}
            {title}
            {rightIcon}
        </button>
    )
}

export default Button