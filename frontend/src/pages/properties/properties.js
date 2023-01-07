import React from 'react'
import styles from "./properties.module.css";

//Component imports---------------
import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import FeaturedRentalCardLrg from "../../components/featuredrentalcardlrg/featuredrentalcardlrg"

import featuredlisting1 from "../../assets/featuredlisting1.png"

export default function properties() {
  return (
    <div className={styles.outermostcontainer}>properties
        <Navbar />
        <section className={styles.featuredrentalssection}>
          <div className={styles.featuredrentalstitle}>Featured Rentals</div>
          <FeaturedRentalCardLrg featuredlisting1={featuredlisting1}/>
          <FeaturedRentalCardLrg featuredlisting1={featuredlisting1}/>
          <p>Metro NZ Property Management has offices conveniently located in Central Auckland but operates throughout New Zealand and also internationally.Metro NZ Property Management has offices conveniently located in Central Auckland but operates throughout New Zealand and also internationally.Metro NZ Property Management has offices conveniently located in Central Auckland but operates throughout New Zealand and also internationally.Metro NZ Property Management has offices conveniently located in Central Auckland but operates throughout New Zealand and also internationally.Metro NZ Property Management has offices conveniently located in Central Auckland but operates throughout New Zealand and also internationally.Metro NZ Property Management has offices conveniently located in Central Auckland but operates throughout New Zealand and also internationally.Metro NZ Property Management has offices conveniently located in Central Auckland but operates throughout New Zealand and also internationally.Metro NZ Property Management has offices conveniently located in Central Auckland but operates throughout New Zealand and also internationally.</p>
          <h3>Testing</h3>
        </section>
        <Footer />
      
    </div>
  )
}


