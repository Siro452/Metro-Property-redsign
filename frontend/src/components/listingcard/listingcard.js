import styles from "./listingcard.module.css";
import bedroom from "../../assets/bedgray.svg";
import bathroom from "../../assets/bathtubgray.svg";
import garage from "../../assets/cargray.svg";
import placeHolder from "../../assets/Rectangle 21.png";

export default function ListingCard(props) {
  return (
    <div className={styles.listingcard}>
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
    </div>
  );
}
