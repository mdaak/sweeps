import Image from "next/image";
import React from "react";
import styles from "../../styles/homeStyle/Support.module.scss";


const Support =()=>{

const Support = [
    {
        id:'1',
        img:'https://uploads-ssl.webflow.com/607e52c130b67869671e3951/61cd9ed07d74a7600987aebc_female-avatar.png',
        massage:'Hi can someone come help with odd jobs around the house this weekend?'
    },
    {
        id:'2',
        img:'https://uploads-ssl.webflow.com/607e52c130b67869671e3951/61cd9ed0c237ed4c37dc5328_businessman.png',
        massage:'Sure, a Sweeper, Jane D., is available Saturday at 2pm, would that work for you'
    },
    {
        id:'3',
        img:'https://uploads-ssl.webflow.com/607e52c130b67869671e3951/61cd9ed07d74a7600987aebc_female-avatar.png',
        massage:'Yes, that works great, I would like to confirm.'
    },
    {
        id:'4',
        img:'https://uploads-ssl.webflow.com/607e52c130b67869671e3951/61cd9ed0c237ed4c37dc5328_businessman.png',
        massage:'Great, confirmed, you are all set for Saturday!'
    }
]
  return (
    <div className={styles.supportSection}>
      <div className={styles.supportDiv}>
        <div className={styles.supportText}>
          <h2>Human Support</h2>
          <p>
            Our support team is standing by 7 days a week to help make your job
            a success.
          </p>
          <p>
            Once you post your first job, it is easy to text, call, or message
            us for ongoing work.
          </p>
          <p>Try it, text us now: (919) 336-1087 or chat with us.</p>
        </div>
        <div className={styles.supportMsg}>
            {
                Support.map((data, i)=>{
                    return(
                        <div key={i} >
                            <Image alt="" src={data.img} height={50} width={50}/>
                            <p>{data.massage}</p>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
};

export default Support;
