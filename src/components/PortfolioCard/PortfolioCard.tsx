'use client'

import React from 'react';
import styles from './styles.module.scss';
import formatDate from "@/utils/formatDate";


const Card = ({portfolio}: any) => {

    const data = portfolio.attributes;
    const technologies = portfolio.attributes.technologies.data;

    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img
                    className={styles.image}
                    src={`http://127.0.0.1:1337${data.Image.data.attributes.url}`}
                    alt="Portfolio Image"
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{data.Title}</h3>
                <div className={styles.description}><p>{data.Description[0].children[0].text}</p></div>
                <div className={styles.skills}>{technologies.map(el => <span key={el.id} className={styles.tags}>{el.attributes.title}</span>)}</div>
                <div className={styles.footer}>
                    <span className={styles.date}>{formatDate(data.createdAt)}</span>
                    <a target='_blank' rel='noreferrer' href={data.url} className={styles.btn}>Visit {data.Title}</a>
                </div>
            </div>
        </div>
    );
};

export default Card;