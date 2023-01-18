import React, { useEffect, useState } from "react";
import styles from "./individuallisting.module.css";
import { Link } from "react-router-dom";

//Component imports---------------
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import ListingMainFeaturesBlue from "../../components/buttons/listingmainfeaturesblue";
import ListingPromptsRed from "../../components/buttons/listingpromptsred";
import SimilarProperties from "./similarproperties";

//Image imports-------------------
import backarrow from "../../assets/backarrow.svg";
import bed from "../../assets/bediconwhite.svg";
import bath from "../../assets/bathiconwhite.svg";
import pet from "../../assets/peticonwhite.svg";
import bus from "../../assets/busiconwhite.svg";
import maplisting from "../../assets/maplisting.png";
import ImageSliderComponent from "./imageslidercomponent";

export default function IndividualListing() {
  // Replace these with the data from the database and also change to featuredinfo.bedrooms etc
  const bedrooms = 3;
  const bathrooms = 1;
  const publictransport = 4;

  const bullets = [
    "Partially Furnished",
    "Pet friendly",
    "Power and internet included",
    "Move in cost $1000, two weeks bond",
  ];

  return (
    <div className={styles.outermostcontainer}>
      <Navbar />

      <Link to={"/PropertiesToRent"} style={{ textDecoration: "none" }}>
        <div className={styles.backbutton}>
          <img src={backarrow}></img>
          <p>Back</p>
        </div>
      </Link>

      <ImageSliderComponent />

      <section className={styles.propertyinfosectionoutercontainer}>
        <div className={styles.propertyinfosectioninnercontainer}>
          <p className={styles.listedon}>Listed: On a certain date</p>

          <div className={styles.bodyandaside}>
            <div className={styles.textinfo}>
              <h1>Title A Cozy House at a nice location</h1>
              <h3>15D, Chad Road, St Heliers, Auckland 1540</h3>
              <div className={styles.featurebtns}>
                <ListingMainFeaturesBlue
                  image={bed}
                  text={`${bedrooms} Beds`}
                />
                <ListingMainFeaturesBlue
                  image={bath}
                  text={`${bathrooms} Bath`}
                />
                <ListingMainFeaturesBlue image={pet} text={"Pet Friendly"} />
                <ListingMainFeaturesBlue
                  image={bus}
                  text={`${publictransport} mins to public transport`}
                />
              </div>
              <h1>Property Informations</h1>
              <ul className={styles.list}>
                {bullets.map((feature, index) => {
                  return (
                    <li key={index} className={styles.listitem}>
                      {feature}
                    </li>
                  );
                })}
              </ul>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sagittis nunc vel libero consequat laoreet. Aliquam venenatis
                nec ipsum non ornare. Suspendisse sagittis rutrum felis, quis
                fringilla tellus mollis ut. Duis ultricies egestas felis, id
                ullamcorper libero. Morbi tincidunt varius neque, in congue
                ligula fringilla vel. Aliquam erat volutpat. Morbi nec risus ut
                dui consectetur malesuada a sit amet diam. Ut elementum mauris
                vitae neque porttitor ultrices. Nam molestie dignissim viverra.
                Aliquam faucibus risus tempus enim fermentum, a tincidunt magna
                iaculis. Vestibulum a scelerisque nisi. Pellentesque tincidunt
                tellus eu elementum dictum. Morbi eget finibus dolor.
              </p>
            </div>

            <div className={styles.aside}>
              <h1>$500/week</h1>
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

      <SimilarProperties />

      <Footer />
    </div>
  );
}
