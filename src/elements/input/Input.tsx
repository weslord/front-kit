import React, { forwardRef } from 'react';

import './Input.scss';

export const Input = forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>((
    {
        className,
        ...props
    },
    ref
) => {
    return (
        <input
            ref={ref}
            {...props}
            className={`Input ${className || ''}`}
        />
    );
});
