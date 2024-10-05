'use client'

import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import aboutFetch from "@/api/aboutFetch";
import socialFetch from "@/api/socialFetch";



const Information = () => {
    const [information, setInformation] = useState<any>(null);
    const [social, setSocial] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchInformation = async () => {
            try {
                const data = await aboutFetch();
                const social = await socialFetch();
                setInformation(data);
                setSocial(social);
            } catch (err) {
                setError('Failed to load technologies data');
            } finally {
                setLoading(false);
            }
        };

        fetchInformation();
    }, []);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section className={styles.home}>
            <div className={styles.body}>
                <div className={styles.info}>
                    <h1 className={styles.name}>{information?.data[0].attributes.title}</h1>
                    <h2 className={styles.title}>About me</h2>
                    <p className={styles.text}>{information?.data[0].attributes.about[0].children[0].text}</p>
                    <div className={styles.social}>
                        <ul className={styles.list}>
                            {social?.data?.map((item: any) => (
                                <li key={item.id} className={styles.item}>
                                    <a href={item.attributes.link}>
                                        <div className={styles.wrapper}>
                                            <img
                                                src={`http://127.0.0.1:1337${item.attributes.icon.data.attributes.url}`}
                                                alt={item.attributes.icon.data.attributes.name}
                                            />
                                        </div>
                                        {item.attributes.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.img}>
                    <img
                        src={`http://127.0.0.1:1337${information?.data[0].attributes.image.data.attributes.url}`}
                        alt="Portret"
                    />
                </div>
            </div>
        </section>
    );
};

export default Information;
