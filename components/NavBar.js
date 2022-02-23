import Image from "next/image";
import React from "react";
import styles from '../styles/Nav.module.scss';

const NavBar = () => {
  return (
    <div className={styles.NavSection}>
      <div className={styles.NavBar}>
        <div className={styles.NavLoge}>
          <Image src="/swiperLogo.png" alt="" width={100} height={50} />
        </div>
        <div className={styles.NavManu}>
          <ul>
            <p>1-855-SWEEPS7</p>
            <div style={{borderLeft:'.1px solid black',height:'25px', marginLeft:'25px'}}></div>
            <li className={styles.listItem}>About</li>
            <li>Locations</li>
            <li>Services</li>
            <li>Pricing</li>
            <button className={styles.grayBtn}>Become a Sweeper</button>
            <button>Post a Job</button>
            <li className={styles.listItem}>Sign in</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
