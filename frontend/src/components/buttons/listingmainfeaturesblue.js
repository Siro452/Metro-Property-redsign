import React from 'react'
import styles from "./buttonstyles.module.css";

export default function ListingMainFeaturesBlue(props) {
  return (
    <div className={styles.bluefeaturesbtncontainer}>
        <img src={props.image} alt="feature-icon" />
        {props.text} 
    </div>
  )
}
