import React from 'react'
import styles from "./properties.module.css";

//Component imports---------------
import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import FeaturedRentalCardLrg from "../../components/featuredrentalcardlrg/featuredrentalcardlrg"
import SearchContainer from "../../components/searchcontainer/searchcontainer"

import featuredlisting1 from "../../assets/featuredlisting1.png"
import featuredlisting2 from "../../assets/featuredlisting2.png"
import featuredlisting3 from "../../assets/featuredlisting3.png"
import pagination from "../../assets/paginationimage.svg"
import background from "../../assets/searchbackgroundimage.png"

export default function properties() {
  return (
    <div className={styles.outermostcontainer}>properties
        <Navbar />
        <div style={{ backgroundImage: `url(${background})` }} className={styles.bannerbackground} >
          <h2>Search Our Properties</h2>
          <SearchContainer />
        </div>
        
        <section className={styles.featuredrentalssection}>
          <div className={styles.featuredrentalstitle}>Featured Rentals</div>
          <FeaturedRentalCardLrg featuredlisting1={featuredlisting1}/>
          <FeaturedRentalCardLrg featuredlisting1={featuredlisting2}/>
          <FeaturedRentalCardLrg featuredlisting1={featuredlisting3}/>
          <img src={pagination} alt="pages icons" />
        
        </section>
        <Footer />
      
    </div>
  )
}


