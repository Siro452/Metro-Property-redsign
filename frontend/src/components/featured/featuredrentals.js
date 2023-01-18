import styles from "./featured.module.css";
import SearchButtonRed from "../buttons/searchbuttonred";
import ListingCard from "../listingcard/listingcard";
import React, { useEffect, useState } from "react";
import SubHeading from "../subheading/subheading";

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
    <div className={styles.featured}>
      <SubHeading
        title="Featured Rentals"
        content="We place high importance to finding a property for you that you will
      feel fully at home in and that you will want to stay in for a long
      time."
      />

      <div className={styles.featuredmaincontainer}>
        <div className={styles.subsection}>
          <SearchButtonRed
            buttonTitle={"Search All"}
            linkName="/propertiestorent"
          />
        </div>
        <div className={styles.featuredsubcontainer}>
          {" "}
          {featuredListingData &&
            featuredListingData.map((listing, index) => {
              return (
                <ListingCard
                  key={index}
                  image={listing.image.galleryimg}
                  address={listing.address.streetaddress}
                  city={listing.address.city}
                  district={listing.address.district}
                  suburb={listing.address.suburb}
                  cost={listing.cost}
                  carparks={listing.featuredinfo.carparks}
                  bathrooms={listing.featuredinfo.bathrooms}
                  bedrooms={listing.featuredinfo.bedrooms}
                  id={listing._id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
