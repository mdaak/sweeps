import React from "react";
import styles from "../../styles/homeStyle/SweepsNumbers.module.scss";

const SweepsNumbers = () => {
  return (
    <div className={styles.numberSection}>
      <div className={styles.numberDiv}>
        <h1>Sweeps by the Numbers</h1>
        <div className={styles.numberContent}>
          <div>
            <h1>15</h1>
            <h6>Years in Business</h6>
            <p>
              We got our start in 2006 as a family cleaning company in Raleigh,
              and have been working jobs nearly every day since then.
            </p>
          </div>
          <div>
            <h1>5,000+</h1>
            <h6>Happy Customers</h6>
            <p>Join over 5,000 clients, from Fortune 500 companies to local homeowners - including one that has used Sweeps for over 1,000 jobs!</p>
          </div>
          <div>
            <h1>4.95</h1>
            <h6>Average review (out of 5)</h6>
            <p>Our secret sauce is hand-picking the right worker to each job, resulting in consistently excellent work.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SweepsNumbers;
