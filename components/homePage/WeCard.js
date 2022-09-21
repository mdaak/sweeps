import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/homeStyle/We.module.scss";
import catagory from "../../data/job_catagory.json"

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
          {
            catagory.map((topic, i) => {
              return (
                <div key={i} className={styles.card}>
                  <div  className={styles.imgContainer}>
                    <Image
                      src={topic.image}
                      layout="fill"
                      alt=""
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <p>{topic.name}</p>
                    <p>&#10095;</p>
                  </div>
                </div>
              )

            })
          }
        </div>
      </div>
    </div>
  );
};

export default WeCard;
