import React from 'react'
import styles from "./featuredrentalcardlrg.module.css";

import car from "../../assets/Car.svg";
import bath from "../../assets/Bathtub.svg";
import bed from "../../assets/bed.svg";


export default function featuredrentalcardlrg(props) {
  return (
    <div className={styles.outermostcontainer}>
        <img src={props.featuredlisting1} alt="property listing"/>

        <div className={styles.listingdetailscontainer}>

            <div className={styles.listingtitle}>
                <div>60, Hackett Street, Saint Marys Bay, Auckland </div>
                <div className={styles.priceperweek}>$725/week</div>
            </div>

            <div className={styles.propertyfeaturescontainer}>
                <div className={styles.propertyfeatures}><img src={car} alt="parking space icon"/>2</div>
                <div className={styles.propertyfeatures}><img src={bath} alt="bathroom icon"/>2</div>
                <div className={styles.propertyfeatures}><img src={bed} alt="bedroom icon"/>2</div>
            </div>
            
        </div>
        
    </div>
  )
}
