import React, { useEffect, useState } from 'react'
import styles from "./properties.module.css";

//Component imports---------------
import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import FeaturedRentalCardLrg from "../../components/featuredrentalcardlrg/featuredrentalcardlrg"
import SearchContainer from "../../components/searchcontainer/searchcontainer"

//Image imports-------------------
import pagination from "../../assets/paginationimage.svg"
import background from "../../assets/searchbackgroundimage.png"


export default function Properties() {

  const [featuredListingData, setFeaturedListingData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/featuredListing")
    .then((res) => res.json())
    .then((resultsData) => {
      //Testing logs----------
      console.log(resultsData)
      setFeaturedListingData(resultsData)
    })
  },[])

  return (
    <div className={styles.outermostcontainer}>
        <Navbar />
        <div style={{ backgroundImage: `url(${background})` }} className={styles.bannerbackground} >
          <h2>Search Our Properties</h2>
          <SearchContainer />
        </div>
        
        <section className={styles.featuredrentalssection}>
          <div className={styles.featuredrentalstitle}>Featured Rentals</div>
          {featuredListingData && featuredListingData.map((listing, index) => {
              
            return(
              <FeaturedRentalCardLrg key={index} image={listing.image.featuredimg} address={listing.address.streetaddress} cost={listing.cost} carparks={listing.featuredinfo.carparks} bathrooms={listing.featuredinfo.bathrooms} bedrooms={listing.featuredinfo.bedrooms}/>
            )
          })}
          <img src={pagination} alt="pages icons" />
        
        </section>
        <Footer />
      
    </div>
  )
}


