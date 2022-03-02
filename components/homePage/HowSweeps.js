import Image from "next/image";
import React from "react";
import styles from "../../styles/homeStyle/HowSweeps.module.scss";

const HowSweeps = () => {
  const card = [
    {
      id: 1,
      img: "https://uploads-ssl.webflow.com/607e52c130b67869671e3951/60ae855f99bd7876823e11a3_noun_clipboard_260608-p-500.png",
      subHeading: "Post a Job",
      text: " Posting is free, easy, and only takes a few minutes. Sweepers in your area are notified and matched to your job.",
    },
    {
      id: 2,
      img: "https://uploads-ssl.webflow.com/607e52c130b67869671e3951/60ae855f99bd7899173e118f_noun_profile_95874-p-500.png",
      subHeading: "Confirm Details",
      text: " Review Sweeper profiles and job details before confirming. It's easy to edit, comment, or reschedule at any point.",
    },
    {
      id: 3,
      img: "https://uploads-ssl.webflow.com/607e52c130b67869671e3951/60ae855f99bd78012c3e119e_noun_Box_1276334-p-500.png",
      subHeading: "Sweepers Get to Work",
      text: " Sweepers arrive on-time, ready to work and follow instructions until the job is done.",
    },
    {
      id: 4,
      img: "https://uploads-ssl.webflow.com/607e52c130b67869671e3951/60ca08da1b934401c67cb863_noun_review_2139241-p-500.png",
      subHeading: "Pay & Review",
      text: " After the job, you will be asked to review Sweeper timesheets and performance, and pay online.",
    },
  ];
  return (
    <div className={styles.HowSweepsSection}>
      <div className={styles.HowDiv}>
        <h1>How Sweeps Works</h1>
        <div className={styles.numberContent}>
          {card.map((data, i) => {
            return (
              <div key={i} className={styles.cardText}>
                  <div className={styles.cardImg}>
                      <Image alt="howCard" src={data.img} 
                      height='100%'
                      width='100%'
                      />
                  </div>
                <h1>{data.number}</h1>
                <h6>{data.subHeading}</h6>
                <p>{data.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowSweeps;
