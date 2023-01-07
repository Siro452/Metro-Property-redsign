import React from 'react'
import styles from "./featuredrentalcardlrg.module.css";



export default function featuredrentalcardlrg(props) {
  return (
    <div className={styles.outermostcontainer}>
        <img src={props.featuredlisting1} />
        
    </div>
  )
}
