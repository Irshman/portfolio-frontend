'use client'

import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination,  Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import certificatesFetch from "@/api/certificatesFetch";
import './styles.scss';


const CertificatesList = () => {
    const [certificates, setCertificates] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCertificates = async () => {
            try {
                const data = await certificatesFetch();
                setCertificates(data);
            } catch (err) {
                console.error('Error fetching:', err);
                setError('Failed to load data');
            } finally {
                setLoading(false);
            }
        };

        fetchCertificates();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section className='certificates'>
            <div className='container'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    // autoplay={{
                    //   delay: 2500,
                    //   disableOnInteraction: false,
                    // }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className='mySwiper'
                >
                    {certificates?.data?.map((certificate: any) => {
                        return (
                            <SwiperSlide
                                key={certificate.id}
                                className={styles.slide}
                            >
                                <div className={styles.wrapper}>
                                    <img
                                        src={`http://127.0.0.1:1337${certificate.attributes.media.data.attributes.url}`}
                                        alt={certificate.attributes.media.data.attributes.alternativeText}
                                    />
                                </div>
                                <span>{certificate.attributes.name}</span>
                            </SwiperSlide>
                        )
                        }
                    )}
                </Swiper>
            </div>
        </section>
    );
};

export default CertificatesList;
