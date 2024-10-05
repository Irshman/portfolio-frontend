'use client'

import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss';

import ProgressBar from "@ramonak/react-progress-bar";

interface TechnologyItemProps {
    title: string
    progress: number
    bgColor: string
}

const TechnologyItem = ({title, progress, bgColor}: TechnologyItemProps) => {
    return (
        <div className={styles.skill}>
            <h3 className={styles.name}>{title}</h3>
            <ProgressBar
                margin="0 auto"
                height="5px"
                labelAlignment='outside'
                labelColor='#424242'
                labelSize={'.8rem'}
                animateOnRender={true}
                baseBgColor={'#EEEEEE'}
                transitionTimingFunction='ease-out'
                transitionDuration='2s'
                bgColor={bgColor}
                completed={progress}
                className={styles.progressbar}
            />
        </div>
    )
};


export default TechnologyItem;
