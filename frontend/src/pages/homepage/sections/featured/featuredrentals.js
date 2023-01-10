import styles from "./featured.module.css";
import Line from "../../../../components/line/line";
import SearchButtonRed from "../../../../components/buttons/searchbuttonred";
import ListingCard from "../../../../components/listingcard/listingcard";
import React, { useEffect, useState } from "react";

export default function FeaturedRentals() {
  const [featuredListingData, setFeaturedListingData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/featuredListing")
      .then((res) => res.json())
      .then((resultsData) => {
        //Testing logs----------
        console.log(resultsData);
        setFeaturedListingData(resultsData);
      });
  }, []);

  return (
    <div>
      <div className={styles.featuredheader}>
        <Line />
        <h3>Featured Rentals</h3>
        <p>
          We place high importance to finding a property for you that you will
          feel fully at home in and that you will want to stay in for a long
          time.
          <div className={styles.subsection}>
            <SearchButtonRed buttonTitle={"Search All"} />
          </div>
        </p>
      </div>
      <div className={styles.featuredcontainer}>
        {featuredListingData &&
          featuredListingData.map((listing, index) => {
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
    </div>
  );
}
