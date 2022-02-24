import Image from "next/image";
import React from "react";
import styles from "../../styles/homeStyle/We.module.scss";

const WeCard = () => {
  return (
    <div className={styles.weSection}>
      <div className={styles.weContainer}>
        <div>
          <h1>What We Do</h1>
          <p>
            Sweepers are ready to assist with your next home or office project.
          </p>
        </div>
        <div className={styles.cardDiv}>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image
                src="https://uploads-ssl.webflow.com/607e52c130b678aa2a1e3968/60acfe960986d1af648ac7d5_anything.jpg"
                layout="fill"
                alt=""
              />
            </div>
            <div className={styles.textContainer}>
              <p>Odd Jobs</p>
              <p>&#10095;</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image
                src="https://uploads-ssl.webflow.com/607e52c130b678aa2a1e3968/60acfe960986d1af648ac7d5_anything.jpg"
                layout="fill"
                alt=""
              />
            </div>
            <div className={styles.textContainer}>
              <p>Odd Jobs</p>
              <p>&#10095;</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image
                src="https://uploads-ssl.webflow.com/607e52c130b678aa2a1e3968/60acfe960986d1af648ac7d5_anything.jpg"
                layout="fill"
                alt=""
              />
            </div>
            <div className={styles.textContainer}>
              <p>Odd Jobs</p>
              <p>&#10095;</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image
                src="https://uploads-ssl.webflow.com/607e52c130b678aa2a1e3968/60acfe960986d1af648ac7d5_anything.jpg"
                layout="fill"
                alt=""
              />
            </div>
            <div className={styles.textContainer}>
              <p>Odd Jobs</p>
              <p>&#10095;</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image
                src="https://uploads-ssl.webflow.com/607e52c130b678aa2a1e3968/60acfe960986d1af648ac7d5_anything.jpg"
                layout="fill"
                alt=""
              />
            </div>
            <div className={styles.textContainer}>
              <p>Odd Jobs</p>
              <p>&#10095;</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image
                src="https://uploads-ssl.webflow.com/607e52c130b678aa2a1e3968/60acfe960986d1af648ac7d5_anything.jpg"
                layout="fill"
                alt=""
              />
            </div>
            <div className={styles.textContainer}>
              <p>Odd Jobs</p>
              <p>&#10095;</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image
                src="https://uploads-ssl.webflow.com/607e52c130b678aa2a1e3968/60acfe960986d1af648ac7d5_anything.jpg"
                layout="fill"
                alt=""
              />
            </div>
            <div className={styles.textContainer}>
              <p>Odd Jobs</p>
              <p>&#10095;</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image
                src="https://uploads-ssl.webflow.com/607e52c130b678aa2a1e3968/60acfe960986d1af648ac7d5_anything.jpg"
                layout="fill"
                alt=""
              />
            </div>
            <div className={styles.textContainer}>
              <p>Odd Jobs</p>
              <p>&#10095;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeCard;
