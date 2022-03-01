import Image from "next/image";
import React from "react";
import styles from "../../styles/homeStyle/Areas.module.scss";

const Areas = () => {
  const areaCardData = [
    {
      id: 1,
      image:
        "https://uploads-ssl.webflow.com/607e52c130b678aa2a1e3968/60f965ce1f4c9ce6f5ade3f6_asheville_t.jpg",
      type: "Asheville",
    },
    {
      id: 2,
      image:
        "https://uploads-ssl.webflow.com/607e52c130b678aa2a1e3968/61e6fe1d4d5d8a1cfa7d297e_boone%20300.jpg",
      type: "Boone",
    },
    {
      id: 3,
      image:
        "https://uploads-ssl.webflow.com/607e52c130b678aa2a1e3968/60f965c66d62685a729ffb12_chapelhill_t.jpg",
      type: "Chapel Hill",
    },
    {
      id: 4,
      image:
        "https://uploads-ssl.webflow.com/607e52c130b678aa2a1e3968/60f9661dd3d37e1b944e0dfb_charleston_t.jpg",
      type: "Charleston",
    },
    {
      id: 5,
      image:
        "https://uploads-ssl.webflow.com/607e52c130b678aa2a1e3968/60f965e3bc584e4a75ab7ee6_charlotte_t.jpg",
      type: "Charlotte",
    },
    {
      id: 6,
      image:
        "https://uploads-ssl.webflow.com/607e52c130b678aa2a1e3968/60f966289fd57dae3fb6a79b_collegestation_t.jpg",
      type: "College Station",
    },
    {
      id: 7,
      image:
        "https://uploads-ssl.webflow.com/607e52c130b678aa2a1e3968/60f966146d626807bb9ffb74_durham_t.jpg",
      type: "Durham",
    },
    {
      id: 8,
      image:
        "https://uploads-ssl.webflow.com/607e52c130b678aa2a1e3968/60f965edbf76d74cc2c3d0cd_greensboro_t.jpg",
      type: "Greensboro",
    },
    {
      id: 9,
      image:
        "https://uploads-ssl.webflow.com/607e52c130b678aa2a1e3968/60f965f8994bfc2011c61a17_greenville_t.jpg",
      type: "Greenville",
    },
    {
      id: 10,
      image:
        "https://uploads-ssl.webflow.com/607e52c130b678aa2a1e3968/60f965ff4382e22643b96fca_raleigh_t.jpg",
      type: "Releigh",
    },
    {
      id: 11,
      image:
        "https://uploads-ssl.webflow.com/607e52c130b678aa2a1e3968/60f96607326c380c40909ea7_wilmington_t.jpg",
      type: "Wilmington",
    },
  ];
  return (
    <div className={styles.areaSection}>
      <div className={styles.areaDiv}>
        <h1>Areas we Serve</h1>
        <p>We work in and around the following areas:</p>
        <div className={styles.areaContent}>
          {areaCardData.map((data, i) => {
            return (
              <div key={i} className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={data.image}
                    alt=""
                    layout="responsive"
                    width="100%"
                    height='100%'
                  />
                </div>
                <div className={styles.cardText}>
                <p>{data.type}</p> <p>&#x276F;</p>   
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Areas;
