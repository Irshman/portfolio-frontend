import Header from "@/components/Header/Header";
import styles from "@/app/styles.module.scss";
import Container from "@/layout/Container/Container";
import TechnologiesList from "@/components/TechnologiesList/TechnologiesList";
import React from "react";

export default function SkilsPage() {

    return (
        <Container>
            <Header/>
            <main className={styles.main}>
                <h1 className={styles.title}>My skills</h1>
                <TechnologiesList/>
            </main>
        </Container>
    );
}
