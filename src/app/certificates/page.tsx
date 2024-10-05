import Header from "@/components/Header/Header";
import styles from "@/app/styles.module.scss";
import Container from "@/layout/Container/Container";
import CertificatesList from "@/components/CertificatesList/CertificatesList";
import React from "react";

export default function CertificatesPage() {

    return (
        <Container>
            <Header/>
            <main className={styles.main}>
                <h1 className={styles.title}>My certificates</h1>
                <CertificatesList/>
            </main>
        </Container>
    );
}
