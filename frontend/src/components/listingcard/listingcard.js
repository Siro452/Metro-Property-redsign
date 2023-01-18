import styles from "./listingcard.module.css";
import bedroom from "../../assets/bedgray.svg";
import bathroom from "../../assets/bathtubgray.svg";
import garage from "../../assets/cargray.svg";
import { Link, useParams, useSearchParams } from "react-router-dom";

export default function ListingCard(props) {
  const state = {
    "featuredinfo.bedrooms[gte]": props.bedrooms,
    // "featuredinfo.bathrooms[gte]": props.bathrooms,
    "address.city": props.city,
    // "address.district": props.district,
  };
  const searchParams = new URLSearchParams();
  searchParams.set("state", JSON.stringify(state));

  return (
    <Link
      className={styles.listingcard}
      to={{
        pathname: `/PropertyListing/${props.id}`,
        search: `?${searchParams.toString()}`,
      }}
    >
      <img className={styles.houseimg} src={props.image} alt="houseimg"></img>
      <div className={styles.listingcontent}>
        <h4>{props.address}</h4>

        <h5>$ {props.cost}/week</h5>
        <div className={styles.housefeatures}>
          <img src={bedroom} alt="bedroomicon"></img>
          <label>{props.bedrooms}</label>
          <img src={bathroom} alt="bathroomicon"></img>
          <label>{props.bathrooms}</label>
          <img src={garage} alt="caricon"></img>
          <label>{props.carparks}</label>
        </div>
      </div>
    </Link>
  );
}
