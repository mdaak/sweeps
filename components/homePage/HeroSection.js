import React from 'react';
import styles from '../../styles/homeStyle/Hero.module.scss';

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
           <div className={styles.heroContent}>
                <div className={styles.content}>
                    <h1>Get things done with Sweeps.</h1>
                    <p>Hire the right workers for your next move or project.</p>
                    <button>Post a Job</button>
                </div>
           </div>
        </div>
    );
};

export default HeroSection;