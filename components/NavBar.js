import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from '../styles/Nav.module.scss';

const NavBar = () => {
  const pathName = useRouter()
  return (
    <div className={styles.NavSection}>
      <div className={styles.NavBar}>
        <div className={styles.NavLoge}>
          <Link href='/'><a>
            <Image src="/swiperLogo.png" alt="" width={100} height={50} />
          </a></Link>
        </div>
        <div className={styles.NavManu}>
          <ul>
            <p><a href="tel:+8801913905113">+8801913905113</a></p>
            {
              pathName.pathname =='/'  && <button className={styles.grayBtn}><Link href='/join'><a>Become a Sweeper</a></Link></button>
            }
            
            <button>Post a Job</button>
            <li className={styles.signIn}>Sign in</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
