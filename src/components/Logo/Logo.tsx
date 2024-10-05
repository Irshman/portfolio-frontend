"use client";

import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import logoFetch from '@/api/logoFetch';

const Logo = () => {
    const [logoData, setLogoData] = useState<any>(null);

    useEffect(() => {
        const fetchLogo = async () => {
            const logo = await logoFetch();
            setLogoData(logo);
        };

        fetchLogo();
    }, []);

    return (
        <div className={styles.logo}>
            {logoData ? (
                logoData.data.attributes.logoImage ? (
                    <img
                        src={`http://127.0.0.1:1337${logoData.data.attributes.logoImage.data.attributes.url}`}
                        alt="Logo"
                    />
                ) : (
                    <p>{logoData.data.attributes.logoText}</p>
                )
            ) : ''}
        </div>
    );
};

export default Logo;
