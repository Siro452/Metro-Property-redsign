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
  const [query, setQuery] = useState("")
  const [noSearchResults, setNoSearchResults]= useState([])

  //Fetching the featured listings on load
  useEffect(() => {
    fetch("http://localhost:8080/featuredListing")
    .then((res) => res.json())
    .then((resultsData) => {
      //Testing logs----------
      console.log(resultsData)
      setFeaturedListingData(resultsData)
    })
  },[])


// This function removes checkbox data from the query if unchecked
  function handleQueryCheckbox(e){
      if(!e.target.checked){

      const removeCheckbox = {...query}
      delete removeCheckbox[e.target.name]//remove the key value pair of the unchecked box

      setQuery(removeCheckbox)
    }else {
      setQuery({...query, [e.target.name]: e.target.value})
    }
  }

  // This function removes dropdown data if the field is not set
  function handleQuery(e){
    
    if (e.target.value === "any"){
        
      const toRemove = {...query}//shallow copying state
      delete toRemove[e.target.name] //remove the key value pair set to any
      
      setQuery(toRemove)//set the state equal to this new object
    }
     else{
      setQuery({...query, [e.target.name]: e.target.value})
    }
  }

// This function sends the query request to the database
  function handleSearchSubmit(e){
    e.preventDefault();
    
    const queryParameters = new URLSearchParams(query).toString();

    fetch(`http://localhost:8080/searchfilter?${queryParameters}`)
    .then((res) => res.json())
    .then((resultsData) => {
      //Testing logs----------
      console.log(resultsData)
      if(resultsData.length === 0){
        console.log("no results returned")
      }else{
        console.log("results returned")
      }
      
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
      
    </div>
  )
}


