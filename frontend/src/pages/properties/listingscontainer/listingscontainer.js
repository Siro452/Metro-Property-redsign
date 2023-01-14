import React from "react";
import styles from "./listingscontainer.module.css";
import ListingCard from "../../../components/listingcard/listingcard";
import pagination from "../../../assets/paginationimage.svg";

export default function ListingsContainer(props) {
  
  let numOfListingsReturned;
  {props.noSearchResults ? numOfListingsReturned = "0" : numOfListingsReturned = props.searchData.length}


  return (
    <div className={styles.outermostcontainer}>
      
      <div className={styles.mapcontainer}>
        <p className={styles.numoflistings}>Showing {numOfListingsReturned} results</p>

      </div>


      <div className={styles.selectcontainer}>
        <select
          id="sort listings"
          name="sort listings"
          className={styles.sortbox}
        >
          <option value="any">Sort by: Default</option>
          <option value="listeddate">Latest listing</option>
          <option value="cost">Lowest price</option>
          <option value="-cost">Highest price</option>
        </select>
      </div>

      <div className={styles.gridcontainer}>
        {!props.noSearchResults &&
          props.limitedResults.map((listing, index) => {
            return (
              <ListingCard
                key={index}
                image={listing.image.galleryimg}
                address={listing.address.streetaddress}
                cost={listing.cost}
                carparks={listing.featuredinfo.carparks}
                bathrooms={listing.featuredinfo.bathrooms}
                bedrooms={listing.featuredinfo.bedrooms}
              />
            );
          })}
      </div>

      <img src={pagination} alt="pages icons" />
    </div>
  );
}
