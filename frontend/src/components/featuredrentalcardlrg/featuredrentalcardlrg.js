import React from 'react'
import styles from "./featuredrentalcardlrg.module.css";
import { Link } from 'react-router-dom'

import car from "../../assets/car.svg";
import bath from "../../assets/Bathtub.svg";
import bed from "../../assets/bed.svg";


export default function featuredrentalcardlrg(props) {
  const state = {
    "featuredinfo.bedrooms[gte]": props.bedrooms,
    "featuredinfo.bathrooms[gte]": props.bathrooms,
    "address.city": props.city,
    "_id[ne]": props.id,
    "cost[lte]": props.cost + 100,
    // "address.district": props.district,
  };

  const searchParams = new URLSearchParams();
  searchParams.set("state", JSON.stringify(state));

  return (
    <Link 
      className={styles.linkcontainer}
      to={{
        pathname: `/PropertyListing/${props.id}`,
        search: `?${searchParams.toString()}`,
      }} >
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
     </Link>
  )
}
