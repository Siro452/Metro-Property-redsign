import React, { useEffect, useState } from "react";
import styles from "./individuallisting.module.css";
import { Link, useParams, useSearchParams } from "react-router-dom";

//Component imports---------------
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import ListingMainFeaturesBlue from "../../components/buttons/listingmainfeaturesblue";
import ListingPromptsRed from "../../components/buttons/listingpromptsred";
import ImageSliderComponent from "./imageslidercomponent";
import SimilarProperties from "./similarproperties";

//Image imports-------------------
import backarrow from "../../assets/backarrow.svg";
import bed from "../../assets/bediconwhite.svg";
import bath from "../../assets/bathiconwhite.svg";
import pet from "../../assets/peticonwhite.svg";
import bus from "../../assets/busiconwhite.svg";
import maplisting from "../../assets/maplisting.png";



export default function IndividualListing() {
  const [listingData, setListingData] = useState(false);
  const [petFriendly, setPetfriendly] = useState(false);
  const [paragraphBlurb, setParagraphBlurb] = useState(false);
  const [bullets, setBullets] = useState(false);
  const [similarPropertiesData, setSimilarPropertiesData] = useState(false);
  const [skipListings, setSkipListings] = useState(0);
  const [similarListingsFound, setSimilarListingsFound] = useState([]);

// Saving the listing id from the card clicked, that was stored in the url and saving it as a variable in the form for the DB
  const params = useParams();
  const id = { property: params.id };

// Retrieving the search params from the listing selected to query the DB for similar listings
  const searchParams = new URLSearchParams(window.location.search);
  const similar = JSON.parse(searchParams.get("state"));


  //Fetch listing data for  page on load. It fetches the listing id from the dynamic route to do this.====================
  useEffect(() => {
    window.scrollTo(0, 0);

    const toQuery = new URLSearchParams(id).toString();

    fetch(`http://localhost:8080/PropertyListing?${toQuery}`)
      .then((res) => res.json())
      .then((resultsData) => {
        //Testing logs----------
        setListingData(resultsData[0]);
        setPetfriendly(resultsData[0].featuredinfo.petfriendly);
        setParagraphBlurb(resultsData[0].propertyinfo);
        setBullets(resultsData[0].propertyinfobullets);
        
      });
  }, []);


  // ============== To get similar listings and change these when arrows clicked ================
  useEffect(() => {
    
    const toInsert = { ...similar };

    // Adding the skip listings to the query
    toInsert.skip = skipListings;

    const queryParameters = new URLSearchParams(toInsert).toString();

    fetch(`http://localhost:8080/SimilarProperties?${queryParameters}`)
      .then((res) => res.json())
      .then((resultsData) => {
        if (resultsData.length === 0) {
          setSimilarListingsFound(false);
        } else {
          setSimilarListingsFound(true);
          setSimilarPropertiesData(resultsData);
        }
      });
  }, [skipListings]);

  // =================== Handle clicks on to change similar properties carousel ================
  function handleShowPrevious() {
    if (skipListings > 0) {
      setSkipListings(skipListings - 1);
    }
  }

  function handleShowNext() {
    if (skipListings < similarPropertiesData.length) {
      setSkipListings(skipListings + 1);
    }
  }

  return (
    <div className={styles.outermostcontainer}>
      <Navbar />

      <Link to={"/PropertiesToRent"} style={{ textDecoration: "none" }}>
        <div className={styles.backbutton}>
          <img src={backarrow}></img>
          <p>Back</p>
        </div>
      </Link>
      {listingData && <ImageSliderComponent pictData={listingData} />}

      <section className={styles.propertyinfosectionoutercontainer}>
        <div className={styles.propertyinfosectioninnercontainer}>
          <p className={styles.listedon}>Listed: Mon, 2nd January, 2023</p>

          <div className={styles.bodyandaside}>
            <div className={styles.textinfo}>
              {listingData && <h1>{listingData.title}</h1>}
              {listingData && <h3>{listingData.address["streetaddress"]}</h3>}

              <div className={styles.featurebtns}>
                {listingData && (
                  <ListingMainFeaturesBlue
                    image={bed}
                    text={`${listingData.featuredinfo.bedrooms} Beds`}
                  />
                )}
                {listingData && (
                  <ListingMainFeaturesBlue
                    image={bath}
                    text={`${listingData.featuredinfo.bathrooms} Bath`}
                  />
                )}
                {petFriendly && (
                  <ListingMainFeaturesBlue image={pet} text={"Pet Friendly"} />
                )}
                {listingData && (
                  <ListingMainFeaturesBlue
                    image={bus}
                    text={`${listingData.featuredinfo.publictransport} mins to public transport`}
                  />
                )}
              </div>

              <h1>Property Informations</h1>
              <ul className={styles.list}>
                {bullets &&
                  bullets.map((feature, index) => {
                    return (
                      <li key={index} className={styles.listitem}>
                        {feature}
                      </li>
                    );
                  })}
              </ul>

              {paragraphBlurb &&
                paragraphBlurb.map((sentence, index) => {
                  return (
                    <div key={index} className={styles.paragraphtext}>
                      <p>{sentence}</p>
                    </div>
                  );
                })}
            </div>

            <div className={styles.aside}>
              {listingData && <h1>${listingData.cost}/week</h1>}
              <ListingPromptsRed text={"Book a viewing"} />
              <ListingPromptsRed text={"Contact Us"} />
              <ListingPromptsRed text={"Tenancy Application"} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mapsection}>
        <div className={styles.maptitle}>Map</div>
        <img src={maplisting} alt="map" />
      </section>

      <SimilarProperties
        similarPropertiesData={similarPropertiesData}
        handleShowNext={handleShowNext}
        handleShowPrevious={handleShowPrevious}
        similarListingsFound={similarListingsFound}
      />

      <Footer />
    </div>
  );
}
