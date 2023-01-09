import React from 'react'
import styles from "./featuredrentalcardlrg.module.css";

import car from "../../assets/car.svg";
import bath from "../../assets/Bathtub.svg";
import bed from "../../assets/bed.svg";


export default function featuredrentalcardlrg(props) {
  return (
    <div className={styles.outermostcontainer}>
        <img src={props.image} alt="property listing"/>

        <div className={styles.listingdetailscontainer}>

            <div className={styles.listingtitle}>
                <div>{props.address}</div>
                <div className={styles.priceperweek}>${props.cost}/week</div>
            </div>

            <div className={styles.propertyfeaturescontainer}>
                <div className={styles.propertyfeatures}><img src={car} alt="parking space icon"/>{props.carparks}</div>
                <div className={styles.propertyfeatures}><img src={bath} alt="bathroom icon"/>{props.bathrooms}</div>
                <div className={styles.propertyfeatures}><img src={bed} alt="bedroom icon"/>{props.bedrooms}</div>
            </div>
            
        </div>
        
    </div>
  )
}
