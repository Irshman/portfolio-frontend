'use client'

import React, { useEffect, useState } from 'react';
import Header from "@/components/Header/Header";
import styles from "@/app/styles.module.scss";
import Container from "@/layout/Container/Container";
import portfolioFetch from "@/api/portfolioFetch";
import PortfolioCard from "@/components/PortfolioCard/PortfolioCard";

const PortfolioPage = () => {
    const [portfolios, setPortfolios] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Функция для загрузки данных
        const fetchPortfolios = async () => {
            try {
                const data = await portfolioFetch();
                setPortfolios(data);
            } catch (err) {
                console.error('Error fetching portfolios:', err);
                setError('Failed to load data');
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolios();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <Container>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>My works</h1>
                <div className={styles.cards}>
                    {portfolios?.data?.map((portfolio: any) => (
                        <PortfolioCard key={portfolio.id} portfolio={portfolio} />
                    ))}
                </div>
            </main>
        </Container>
    );
};

export default PortfolioPage;
