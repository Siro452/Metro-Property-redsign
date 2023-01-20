import React from 'react'
import styles from "./similarproperties.module.css";
import ListingCard from '../../components/listingcard/listingcard';

import backarrow from "../../assets/backarrow.svg"

export default function SimilarProperties(props) {
   
  return (
    <div className={styles.outermostcontainer}>
        <div className={styles.similarpropertiestitle}>Similar Properties</div>
        <p>
            We place high importance to finding a property for you that you will feel fully at home in and that you will want to stay in for a long time.
        </p>

        {props.similarListingsFound ? <div className={styles.cardcontainer}>
            <div className={styles.arrowleft} onClick={props.handleShowPrevious}><img src={backarrow} alt="back arrow"/></div>
            {props.similarPropertiesData &&
            props.similarPropertiesData.map((listing, index) => {
                return (
                <ListingCard
                    key={index}
                    image={listing.image.galleryimg}
                    address={listing.address.streetaddress}
                    cost={listing.cost}
                    carparks={listing.featuredinfo.carparks}
                    bathrooms={listing.featuredinfo.bathrooms}
                    bedrooms={listing.featuredinfo.bedrooms}
                    id={listing._id}
                />
                );
            })}
            <div className={styles.arrowright} onClick={props.handleShowNext}><img src={backarrow} alt="back arrow" /></div>
        </div> 
        : <div className={styles.noresults}>Unfortnately, no similar listings were found for this property.</div>}


    </div>
  )
}
