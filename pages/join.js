import Link from 'next/link';
import React from 'react';
// import styles from '../../styles/homeStyle/Hero.module.scss';
import styles from '../styles/homeStyle/Hero.module.scss';


function Join() {

  return (
    <div className={styles.heroSection}>
           <div className={styles.heroContent}>
                <div className={styles.content}>
                    <h1>Earn Money with Sweeps</h1>
                    <p>Earn $18/hr working the jobs you want, when you want</p>
                    <Link href='sweeper_form'><a><button>Apply Now</button></a></Link>
                    
                </div>
           </div>
        </div>
  )
}

export default Join