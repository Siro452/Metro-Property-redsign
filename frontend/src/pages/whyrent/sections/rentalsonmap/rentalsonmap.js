import SubHeading from "../../../../components/subheading/subheading";
import mapImg from "../../../../assets/mapimg.png";
import styles from "./rentalsonmap.module.css";

export default function RentalsOnMap() {
  return (
    <div className={styles.container}>
      <SubHeading
        title="Rentals on Map"
        content="Easy find and apply for your next rental."
      />
      <img src={mapImg} alt="map of rentals available"></img>
    </div>
  );
}
