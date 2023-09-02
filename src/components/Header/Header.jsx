import React from 'react';
import cl from './Header.module.scss';
import {Link} from "react-router-dom";
import CartBlock from "../CartBlock/CartBlock";

const Header = () => {
    return (
        <div className={cl.header}>
            <div className={cl.wrapper}>
                <Link to='/' className={cl.headerStoreTitle}>
                    Game Store
                </Link>
            </div>
            <div className={cl.headerCartBtnWrapper}>
                <CartBlock/>
            </div>

        </div>
    );
};

export default Header;