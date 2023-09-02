import React from 'react';
import cl from './Button.module.scss';
import classNames from "classnames";
const Button = ({
                    onClick,
                    type,
                    children,
                    size ='s'


                }) => {
    const btnClass = classNames(
        cl.btn,
        {
            [cl.btnPrimary]: type === 'primary',
            [cl.btnSecondary]: type === 'secondary',
            [cl.btnSmall]: size === 'small',
            [cl.btnMedium]: size === 'medium'
        }
    );
    return (
        <button className={btnClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;