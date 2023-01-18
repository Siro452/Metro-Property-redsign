import React from "react";
import { useState } from "react";
import styles from "./listingscontainer.module.css";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import { red } from "@mui/material/colors";
import Switch from "@mui/material/Switch";

//Component imports---------------
import ListingCard from "../../../components/listingcard/listingcard";

//Image imports-------------------
import pagination from "../../../assets/paginationimage.svg";
import map from "../../../assets/mapscreenshot.png";



export default function ListingsContainer(props) {
  const [mapVisibility, setMapVisibility] = useState(true);

  // MUI component styling
  const RedSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: red[500],
      "&:hover": {
        backgroundColor: alpha(red[500], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: red[500],
    },
  }));

  let numOfListingsReturned;
  {
    props.noSearchResults
      ? (numOfListingsReturned = "0")
      : (numOfListingsReturned = props.searchData.length);
  }

  return (
    <div className={styles.outermostcontainer}>
      <div className={styles.mapcontainer}>
        <div className={styles.mapheader}>
          <p className={styles.numoflistings}>
            Showing {numOfListingsReturned} results
          </p>
          <span>
            <RedSwitch
              size="medium"
              checked={mapVisibility}
              onChange={() => setMapVisibility(!mapVisibility)}
            />
            <p>Map View</p>
          </span>
        </div>

        {mapVisibility && <img src={map} alt="map" />}
      </div>

      <div className={styles.selectcontainer}>
        <select
          id="sort listings"
          name="sort listings"
          className={styles.sortbox}
        >
          <option value="any">Sort by: Default</option>
          <option value="listeddate">Latest listing</option>
          <option value="cost">Lowest price</option>
          <option value="-cost">Highest price</option>
        </select>
      </div>

      <div className={styles.gridcontainer}>
        {!props.noSearchResults &&
          props.limitedResults.map((listing, index) => {
            return (
              <ListingCard
                key={index}
                image={listing.image.galleryimg}
                address={listing.address.streetaddress}
                city={listing.address.city}
                district={listing.address.district}
                cost={listing.cost}
                carparks={listing.featuredinfo.carparks}
                bathrooms={listing.featuredinfo.bathrooms}
                bedrooms={listing.featuredinfo.bedrooms}
                id={listing._id}
              />
            );
          })}
      </div>

      <img src={pagination} alt="pages icons" />
    </div>
  );
}
