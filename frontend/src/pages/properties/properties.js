import React, { useEffect, useState } from 'react'
import styles from "./properties.module.css";

//Component imports---------------
import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import SearchContainer from "../../components/searchcontainer/searchcontainer"
import ListingsContainer from './listingscontainer/listingscontainer';
import FeaturedListingsContainer from './featuredlistingscontainer.js/featuredlistingscontainer';
import NoSearchResults from './nosearchresults/nosearchresults';


//Image imports-------------------
import background from "../../assets/searchbackgroundimage.png"


export default function Properties() {

  const [featuredListingData, setFeaturedListingData] = useState([])
  const [featuredListingsVisible, setFeaturedListingsVisible] = useState(true)
  const [query, setQuery] = useState("")
  const [searchData, setSearchData] = useState([])
  const [noSearchResults, setNoSearchResults]= useState(false)
  const [limitedResults, setLimitedResults] = useState([])
  

  //Fetching the featured listings on load
  useEffect(() => {
    fetch("http://localhost:8080/featuredListing")
    .then((res) => res.json())
    .then((resultsData) => {
      //Testing logs----------
      console.log(resultsData)
      setFeaturedListingData(resultsData)
      setFeaturedListingsVisible(true)
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
        setTimeout(() => {
          setNoSearchResults(true);
          setFeaturedListingsVisible(true);
        }, "500")
        
        console.log(noSearchResults)
      }else{
        let data = [...resultsData]

        console.log("results returned")
        setNoSearchResults(false)
        setSearchData(resultsData)
        setFeaturedListingsVisible(false)

        const slicedData = data.slice(0,9)// This function returns a limited set of results to display on the page- pagination would be more effective. 
        setLimitedResults(slicedData)
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

        <div className={styles.containerforlistings}>
          {!featuredListingsVisible && <ListingsContainer limitedResults={limitedResults} noSearchResults={noSearchResults} searchData={searchData} />}
          
        
          <NoSearchResults noSearchResults={noSearchResults} />
          <FeaturedListingsContainer noSearchResults={noSearchResults} featuredListingsVisible={featuredListingsVisible} featuredListingData={featuredListingData} />
        
        </div>
      
       
        
    
        <Footer /> 

      
    </div>
  )
}


