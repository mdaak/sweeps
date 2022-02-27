import Image from "next/image";
import React from "react";
import styles from "../../styles/homeStyle/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerSection}>
      <div className={styles.footerContent}>
        <div className={styles.iconSection}>
          <Image src="/swiperLogo.png" alt="" width={100} height={50} />
          <h4>1-855-SWEEPS7</h4>
          <p>We are here to help from 9am - 6pm ET</p>
          <div className={styles.logo}>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
          </div>
        </div>
        <div className={styles.contentSection}>
          <div>
            <h4>Get Started</h4>
            <p>Contact</p>
            <p>Post a job</p>
            <p>Become a Sweeper</p>
            <p>Sweeper Shop</p>
            <p>Gift Certificates</p>
          </div>
          <div><h4>Get Started</h4>
            <p>Contact</p>
            <p>Post a job</p>
            <p>Become a Sweeper</p>
            <p>Sweeper Shop</p>
            <p>Gift Certificates</p></div>
          <div><h4>Get Started</h4>
            <p>Contact</p>
            <p>Post a job</p>
            <p>Become a Sweeper</p>
            <p>Sweeper Shop</p>
            <p>Gift Certificates</p></div>
          <div><h4>Get Started</h4>
            <p>Contact</p>
            <p>Post a job</p>
            <p>Become a Sweeper</p>
            <p>Sweeper Shop</p>
            <p>Gift Certificates</p></div>
          <div><h4>Get Started</h4>
            <p>Contact</p>
            <p>Post a job</p>
            <p>Become a Sweeper</p>
            <p>Sweeper Shop</p>
            <p>Gift Certificates</p></div>
          <div><h4>Get Started</h4>
            <p>Contact</p>
            <p>Post a job</p>
            <p>Become a Sweeper</p>
            <p>Sweeper Shop</p>
            <p>Gift Certificates</p></div>
          <div><h4>Get Started</h4>
            <p>Contact</p>
            <p>Post a job</p>
            <p>Become a Sweeper</p>
            <p>Sweeper Shop</p>
            <p>Gift Certificates</p></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
