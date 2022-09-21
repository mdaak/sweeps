import React from "react";
import styles from "../../styles/homeStyle/SimpleReliable.module.scss";
import { RiComputerLine } from 'react-icons/ri';
import { BsCalendarCheck } from 'react-icons/bs';
import { CgCalendarTwo } from 'react-icons/cg';
import { HiOutlineClock } from 'react-icons/hi';


const cardData = [
  {
    id: 1,
    logo: <RiComputerLine/>,
    heading: "Painless Process",
    content: "Simple and intuitive online process from posting to payment.",
  },
  {
    id: 2,
    logo: <BsCalendarCheck/>,
    heading: "On-Demand",
    content: "Reserve months in advance or for this afternoon.",
  },
  {
    id: 3,
    logo: <CgCalendarTwo/>,
    heading: "Book Now, Pay Later",
    content: "No up-front charges, pay once the job is done.",
  },
  {
    id: 4,
    logo: <HiOutlineClock/>,
    heading: "Fair Pricing",
    content: "No hidden fees. Pay only for the time worked.",
  },
];

const SimpleReliable = () => {
  return (
    <>
    <div className={styles.simpleSection}>
      <div className={styles.simpleContent}>
        <h2>Simple, Reliable Hiring</h2>
        <p>
          We take the pain out of moving or home & office projects. Sweeps
          platform makes the entire process simple and dare we say...
          delightful.
        </p>
        <p>
          While we are not professionals (and not the best fit for moving pianos
          or priceless antiques), Sweepers are smart, strong, and eager to help
          make your moving day a success.
        </p>

        <div className={styles.simpleCard}>
          {cardData.map((data, i) => {
            return (
              <div key={i} className={styles.card}>
                <div>
                  <div className={styles.cardLogo}>{data.logo}</div>
                  <h4>{data.heading}</h4>
                  <p>{data.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.cardBottomText}>
          <p><i>Flexible, friendly and fairly priced...what else can you ask for in
            an on-demand service?</i>
            
          </p>
          <p>
            <b>- Brent B., moving in Cary</b>
          </p>
        </div>
      </div>
      
    </div>
    <div className={styles.cardFooter}>
    <p>Seeking flexible, part-time work?</p>
    <button>Become a Sweeper</button>
</div>
</>
  );
};

export default SimpleReliable;
