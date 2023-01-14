import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import styles from "./properties.module.css";

//Component imports---------------
import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import FeaturedRentalCardLrg from "../../components/featuredrentalcardlrg/featuredrentalcardlrg"
import SearchContainer from "../../components/searchcontainer/searchcontainer"

import Testingform from './testingform';

//Image imports-------------------
import pagination from "../../assets/paginationimage.svg"
import background from "../../assets/searchbackgroundimage.png"


export default function Properties() {

  const [featuredListingData, setFeaturedListingData] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch("http://localhost:8080/featuredListing")
    .then((res) => res.json())
    .then((resultsData) => {
      //Testing logs----------
      console.log(resultsData)
      setFeaturedListingData(resultsData)
    })
  },[])

  function handleDisplayMoreFeatured(){

  }

// This function removes checkbox data from the query if unchecked
  function handleQueryCheckbox(e){
      if(!e.target.checked){
      console.log("this is not checked")
      console.log(query)
      const removeCheckbox = {...query}
      delete removeCheckbox[e.target.name]
      console.log(removeCheckbox)
      setQuery(removeCheckbox)
    }else {
      setQuery({...query, [e.target.name]: e.target.value})
    }
  }

  // This function removes dropdown data if the field is not set
  function handleQuery(e){
    
    if (e.target.value == "any"){
      // console.log(query)  
      const toRemove = {...query}//shallow copying state
      delete toRemove[e.target.name] //remove the key value pair set to any
      // console.log(toRemove)
      setQuery(toRemove)//set the state equal to this new object
    }

    // else if(!e.target.checked){
    //   console.log("this is not checked")
    //   console.log(query)
    //   const removeCheckbox = {...query}
    //   delete removeCheckbox[e.target.name]
    //   console.log(removeCheckbox)
    //   setQuery(removeCheckbox)
    // }
    
    else{
      setQuery({...query, [e.target.name]: e.target.value})
    }
  }

  const queryParams = useSearchParams()

  function handleSearchSubmit(e){
    e.preventDefault();
    console.log("The submit button is pressed")
    console.log(query)
    console.log(typeof query)
    

    // const stringQuery = JSON.stringify(query)
    // console.log(stringQuery)
    // console.log(typeof stringQuery)

    // const queryParameters = new URLSearchParams(window.location.search)
    const queryParameters = new URLSearchParams(query).toString();

    console.log(queryParameters)

    fetch(`http://localhost:8080/testparams?${queryParameters}`)
    .then((res) => res.json())
    .then((resultsData) => {
      //Testing logs----------
      console.log(resultsData)
      
    })
  }



  return (
    <div className={styles.outermostcontainer}>
        <Navbar />
        <div style={{ backgroundImage: `url(${background})` }} className={styles.bannerbackground} >
          <h2>Search Our Properties</h2>
          <SearchContainer query={query} setQuery={setQuery} handleSearchSubmit={handleSearchSubmit} handleQuery={handleQuery} handleQueryCheckbox={handleQueryCheckbox}/>
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
        <Testingform />
      
    </div>

        )}