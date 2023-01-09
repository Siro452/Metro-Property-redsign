import styles from "./listingcard.module.css";
import bedroom from "../../assets/bedgray.svg";
import bathroom from "../../assets/bathtubgray.svg";
import garage from "../../assets/cargray.svg";
import placeHolder from "../../assets/Rectangle 21.png";

export default function ListingCard() {
  return (
    <div className={styles.listingcard}>
      <img className={styles.houseimg} src={placeHolder} alt="houseimg"></img>
      <div className={styles.listingcontent}>
        <h4>123 placeholder street</h4>
        <h4>Remuera, Auckland</h4>
        <h5>$ 555/week</h5>
        <div className={styles.housefeatures}>
          <img src={bedroom} alt="bedroomicon"></img>
          <label>1</label>
          <img src={bathroom} alt="bathroomicon"></img>
          <label>1</label>
          <img src={garage} alt="caricon"></img>
          <label>1</label>
        </div>
      </div>
    </div>
  );
}
