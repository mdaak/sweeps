import Image from "next/image";
import React from "react";
import { FaFacebookMessenger, FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "../../styles/homeStyle/Footer.module.scss";

const Footer = () => {
  return (
   <>
    <div className={styles.footerSection}>
      <div className={styles.footerContent}>
        <div className={styles.iconSection}>
          <Image src="/swiperLogo.png" alt="" width={200} height={100} />
          <h4>1-855-SWEEPS7</h4>
          <p>We are here to help from <br/> 9am - 6pm ET</p>
          <div className={styles.logo}>
            <div><FaFacebookSquare/></div>
            <div> <FaInstagram/> </div>
            <div><FaFacebookMessenger/></div>
            <div><FaLinkedin/></div>
            <div><FaTwitter/></div>
            <div><FaYoutube/></div>
            
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
    <div className={styles.footerButtomText}>
      <div>
        <p>
        If you are having difficulty using assistive technology with this website, please use the chat feature or contact us by email at help@sweeps.jobs.
        </p>
      </div>
      <div>
        <h4>
        © 2022 Sweeps. All Rights Reserved.
        </h4>
      </div>
    </div>
    </>

  );
};

export default Footer;
