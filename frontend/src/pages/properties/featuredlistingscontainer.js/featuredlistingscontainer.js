import React from "react";
import styles from "./featuredlistingscontainer.module.css";

import FeaturedRentalCardLrg from "../../../components/featuredrentalcardlrg/featuredrentalcardlrg";

//Image imports-------------------
import magnifyingglass from "../../../assets/searchresultsred.svg"
// import magnifyingglass from "../../../assets/searchresultsblue.svg"
import pagination from "../../../assets/paginationimage.svg";

export default function FeaturedListingsContainer(props) {

  return (
    <div className={styles.featuredrentalssection}>
      {props.noSearchResults && (
        <div className={styles.noresultsreturned}>
          <img src={magnifyingglass} />{" "}
          <p>Oops! No properties match with your searched criteria! Sorry!</p>
        </div>
      )}

      {props.featuredListingsVisible && <div className={styles.featuredrentalstitle}>Featured Rentals</div>}

      {props.featuredListingsVisible && 
        props.featuredListingData.map((listing, index) => {
          return (
            <FeaturedRentalCardLrg
              key={index}
              image={listing.image.featuredimg}
              address={listing.address.streetaddress}
              cost={listing.cost}
              carparks={listing.featuredinfo.carparks}
              bathrooms={listing.featuredinfo.bathrooms}
              bedrooms={listing.featuredinfo.bedrooms}
            />
          );
        })}
      {props.featuredListingsVisible && <img src={pagination} alt="pages icons" />}
    </div>
  );
}
