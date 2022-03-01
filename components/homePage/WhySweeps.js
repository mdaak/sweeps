import Image from "next/image";
import React from "react";
import styles from "../../styles/homeStyle/WhySweeps.module.scss";

const WhySweeps = () => {
  return (
    <div className={styles.whySection}>
      <div  className={styles.section}>
        <h1>Why Choose Sweeps</h1>
        <div className={styles.cardSection}>
          <div className={styles.card}>
            <div>
              <Image
                src="https://uploads-ssl.webflow.com/607e52c130b67869671e3951/60a2912514584d2805789041_security.png"
                //   layout="fill"
                width={125}
                height={125}
                alt=""
              />
            </div>
            <h3>Sweeps Guarantee</h3>
            <p>We are bonded and guarantee all jobs up to $500.</p>
          </div>
          <div className={styles.card}>
            <div>
              <Image
                src="https://uploads-ssl.webflow.com/607e52c130b67869671e3951/60a291250d5f7e89d48b61f9_profile_head_icon.png"
                //   layout="fill"
                width={125}
                height={125}
                alt=""
              />
            </div>
            <h3>Sweeps Guarantee</h3>
            <p>We are bonded and guarantee all jobs up to $500.</p>
          </div>
          <div className={styles.card}>
            <div>
              <Image
                src="https://uploads-ssl.webflow.com/607e52c130b67869671e3951/60a291254448f01bb04e770d_phone.png"
                //   layout="fill"
                width={125}
                height={125}
                alt=""
              />
            </div>
            <h3>Sweeps Guarantee</h3>
            <p>We are bonded and guarantee all jobs up to $500.</p>
          </div>
          <div className={styles.card}>
            <div>
              <Image
                src="https://uploads-ssl.webflow.com/607e52c130b67869671e3951/60a291250721c1842175a089_heart.png"
                //   layout="fill"
                width={125}
                height={125}
                alt=""
              />
            </div>
            <h3>Sweeps Guarantee</h3>
            <p>We are bonded and guarantee all jobs up to $500.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySweeps;
