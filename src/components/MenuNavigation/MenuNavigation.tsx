'use client'
import React from 'react';
import styles from './styles.module.scss'
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuNavigation = () => {
    const pathname = usePathname()

    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                <li className={styles.item}><Link className={`${pathname === '/' ? styles.active : ''}`} href="/">Home</Link></li>
                <li className={styles.item}><Link className={`${pathname === '/portfolio' ? styles.active : ''}`} href="/portfolio">Portfolio</Link></li>
                <li className={styles.item}><Link className={`${pathname === '/skils' ? styles.active : ''}`} href="/skils">Skils</Link></li>
                <li className={styles.item}><Link className={`${pathname === '/certificates' ? styles.active : ''}`} href="/certificates">Certificates</Link></li>
            </ul>
        </nav>
    );
};

export default MenuNavigation;