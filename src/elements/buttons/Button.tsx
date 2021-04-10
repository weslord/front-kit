import React, { ButtonHTMLAttributes } from 'react'

import './Button.scss'

export const Button = ({
    img,
    variant = '',
    children,
    ...props
}: {
    img?: string
    variant?: '' | 'link' | 'blue' | 'blue-link'
    children: string | string[]
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            className={`button ${variant}`}
            {...props}
            type={props.type || 'button'}
        >
            {img && <img src={img} alt='' />}
            {children}
        </button>
    )
}
