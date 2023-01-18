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

        <div className={styles.cardcontainer}>
            <div className={styles.arrowleft} onClick={props.handleShowPrevious}><img src={backarrow} /></div>
            {props.similarPropertiesData &&
            props.slicedSimilarProperties.map((listing, index) => {
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
            <div className={styles.arrowright} onClick={props.handleShowNext}><img src={backarrow} /></div>
        </div>


    </div>
  )
}
