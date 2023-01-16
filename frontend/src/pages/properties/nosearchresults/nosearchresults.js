import React from 'react'
import styles from "./nosearchresults.module.css";



//Image imports-------------------
import magnifyingglass from "../../../assets/searchresultsred.svg"
// import magnifyingglass from "../../../assets/searchresultsblue.svg"


export default function NoSearchResults(props) {
  return (
    <div className={styles.nosearchresultscontainer}>
        
        {props.noSearchResults && (
        <div className={styles.noresultsreturned}>
          <img src={magnifyingglass} alt="search-icon"/>{" "}
          <p>Oops! No properties match with your searched criteria! Sorry!</p>
        </div>
      )}

    </div>
  )
}
