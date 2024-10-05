import React from 'react';
import styles from './styles.module.scss'
import Logo from "@/components/Logo/Logo";
import MenuNavigation from "@/components/MenuNavigation/MenuNavigation";

const Header = () => {
    return (
        <div className={styles.header}>
            <Logo />
            <MenuNavigation />
        </div>
    );
};

export default Header;