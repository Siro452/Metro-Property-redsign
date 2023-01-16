import React from 'react'
import styles from "./buttonstyles.module.css";

export default function ListingPromptsRed(props) {
  return (
    <div className={styles.redoutlinebtncontainer}>
        {props.text}
    </div>
  )
}
