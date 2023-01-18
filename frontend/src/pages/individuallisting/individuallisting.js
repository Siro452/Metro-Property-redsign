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

export default function IndividualListing({ location }) {
  const [listingData, setListingData] = useState(false);
  const [petFriendly, setPetfriendly] = useState(false);
  const [paragraphBlurb, setParagraphBlurb] = useState(false);
  const [bullets, setBullets] = useState(false);
  const [similarProperties, setSimilarProperties] = useState(false);
  const [similarPropertiesData, setSimilarPropertiesData] = useState(false);
  const [slicedSimilarProperties, setSlicedSimilarProperties] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);

  const params = useParams();
  const id = { property: params.id };
  console.log(id);

  const searchParams = new URLSearchParams(window.location.search);
  const similar = JSON.parse(searchParams.get("state"));
  console.log(similar);
  console.log(similar.id);

  //============ This useEffect will fetch the initial data for the listing page on load. It fetches the listing id from the dynamic route to do this.=============
  useEffect(() => {
    // const queried = 1
    const queried = new URLSearchParams(id).toString();
    // const queried = new URLSearchParams(state).toString();

    console.log(queried);
    //    below here was querying {queried}

    fetch(`http://localhost:8080/PropertyListing?${queried}`)
      .then((res) => res.json())
      .then((resultsData) => {
        //Testing logs----------
        //   console.log(resultsData)
        //   console.log(resultsData[0])
        setListingData(resultsData[0]);
        //   console.log(listingData)
        //   console.log(similarProperties)
        setPetfriendly(resultsData[0].featuredinfo.petfriendly);
        setParagraphBlurb(resultsData[0].propertyinfo);
        //   console.log(resultsData[0].propertyinfo[1])
        setBullets(resultsData[0].propertyinfobullets);
        setSimilarProperties({
          ["featuredinfo.featuredproperty"]:
            resultsData[0].featuredinfo.featuredproperty,
        });
        console.log({
          ["featuredinfo.featuredproperty"]:
            resultsData[0].featuredinfo.featuredproperty,
        });
        //   handleSimilarProperties();
      });
  }, []);

  //===================To get similar listings======================
  useEffect(() => {
    // const queried = 1
    const queried = new URLSearchParams(id).toString();
    // const queried = new URLSearchParams(state).toString();
    const queryParameters = new URLSearchParams(similar).toString();
    console.log(queried);
    console.log(queryParameters);
    //    below here was querying {queried}

    fetch(`http://localhost:8080/SimilarProperties?${queryParameters}`)
      .then((res) => res.json())
      .then((resultsData) => {
        //Testing logs----------
        console.log(resultsData);
        setSimilarPropertiesData(resultsData);

        const toSlice = [...resultsData];
        //   const sliced = toSlice.slice(startIndex, endIndex)
        const sliced = toSlice.slice(0, 3);
        console.log(sliced);
        setSlicedSimilarProperties(sliced);
      });
  }, []);

  // ==============Trying to figure out changing listins- this method is not working================
  useEffect(() => {
    // const queried = 1
    const queried = new URLSearchParams(id).toString();
    // const queried = new URLSearchParams(state).toString();
    const queryParameters = new URLSearchParams(similar).toString();
    console.log(queried);
    //    below here was querying {queried}

    fetch(`http://localhost:8080/SimilarProperties?${queryParameters}`)
      .then((res) => res.json())
      .then((resultsData) => {
        //Testing logs----------
        console.log(resultsData);
        setSimilarPropertiesData(resultsData);

        const toSlice = [...resultsData];
        const sliced = toSlice.slice(startIndex, endIndex);
        //    const sliced = toSlice.slice(0, 3)
        console.log(sliced);
        setSlicedSimilarProperties(sliced);
      });
  }, [setStartIndex, setEndIndex]);

  // ===================Handle clicks on similar properties slider================
  function handleShowPrevious() {
    console.log(similarPropertiesData);
    if (startIndex === 0) {
      setEndIndex(3);
    } else {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
  }

  function handleShowNext() {
    if (endIndex < similarPropertiesData.length) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
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
          <p className={styles.listedon}>Listed: On a certain date</p>

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
        slicedSimilarProperties={slicedSimilarProperties}
        handleShowNext={handleShowNext}
        handleShowPrevious={handleShowPrevious}
      />

      <Footer />
    </div>
  );
}
