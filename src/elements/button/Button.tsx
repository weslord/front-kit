import { forwardRef } from 'react'

import './Button.scss'

export const Button = forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className = '', children, ...props }, ref) => {
    return (
        <button
            ref={ref}
            type='button'
            {...props}
            className={`Button ${className || ''}`}
        >
            {children}
        </button>
    )
})
