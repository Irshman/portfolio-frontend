'use client'

import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import technologiesFetch from "@/api/technologiesFetch ";
import TechnologyItem from "@/components/TechnologyItem/TechnologyItem";
import skillsImageFetch from "@/api/skillsImageFetch";



const TechnologiesList = () => {
    const [technologies, setTechnologies] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [skillsImageData, setSkillsImageData] = useState<any>(null);

    useEffect(() => {
        const fetchTechnologies = async () => {
            try {
                const data = await technologiesFetch();
                setTechnologies(data);
            } catch (err) {
                console.error('Error fetching technologies:', err);
                setError('Failed to load technologies data');
            } finally {
                setLoading(false);
            }
        };

        const fetchSkillsImage = async () => {
            try {
                const image = await skillsImageFetch();
                setSkillsImageData(image);
            } catch (err) {
                console.error('Error fetching skills image:', err);
                setError('Failed to load skills image');
            }
        };

        fetchTechnologies();
        fetchSkillsImage();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className={styles.skills}>
            <div className={styles.list}>
                {technologies?.data?.map((technology: any) => (
                        <TechnologyItem title={technology.attributes.title} progress={technology.attributes.progress}
                                        bgColor={technology.attributes.color}/>
                    )
                )}
            </div>
            <div className={styles.image} >
                {skillsImageData ? (
                    skillsImageData.data.attributes.image ? (
                        <img
                            src={`http://127.0.0.1:1337${skillsImageData.data.attributes.image.data.attributes.url}`}
                            alt="Logo"
                        />
                    ) : (
                        <p>{skillsImageData.data.attributes.logoText}</p>
                    )
                ) : ''}
            </div>
        </div>
    );
};

export default TechnologiesList;
