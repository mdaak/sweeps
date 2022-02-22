import Image from "next/image";
import React from "react";
import styles from '../styles/Nav.module.scss';

const NavBar = () => {
  return (
    <div className={styles.NavSection}>
      <div>
        <div>
          <Image src="/swiperLogo" alt="" width={20} height={20} />
        </div>
        <div>
          <ul>
            <p>1-855-SWEEPS7</p>
            <li>About</li>
            <li>Locations</li>
            <li>Services</li>
            <li>Pricing</li>
            <button>Become a Sweeper</button>
            <button>Post a Job</button>
            <li>Sign in</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
