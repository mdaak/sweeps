import React from "react";
import styles from "../../styles/homeStyle/SweepsNumbers.module.scss";

const SweepsNumbers = () => {
  const numberCard = [
    {
      id: 1,
      number:' 15',
      subHeading: "Years in Business",
      text: " We got our start in 2006 as a family cleaning company in Raleigh, and have been working jobs nearly every day since then.",
    },
    {
      id: 2,
      number:' 5,000+',
      subHeading: "Happy Customers",
      text: " Join over 5,000 clients, from Fortune 500 companies to local homeowners - including one that has used Sweeps for over 1,000 jobs!",
    },
    {
      id: 3,
      number: '4.95',
      subHeading: "Average review (out of 5)",
      text: " Our secret sauce is hand-picking the right worker to each job, resulting in consistently excellent work.",
    },
  ];
  return (
    <div className={styles.numberSection}>
      <div className={styles.numberDiv}>
        <h2>Sweeps by the Numbers</h2>
        <div className={styles.numberContent}>
          {numberCard.map((data, i) => {
            return (
              <div key={i} className={styles.cardText}>
                <h1>{data.number}</h1>
                <h6>{data.subHeading}</h6>
                <p>
                  {data.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SweepsNumbers;

{
  /* <div>
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
          </div> */
}
