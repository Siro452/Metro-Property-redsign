import Line from "../../../../components/line/line";
import styles from "./rentalmap.module.css";
import mapRental from "../../../../assets/rentalonmap.png";

export default function RentalMap() {
  return (
    <div className={styles.rentalmapsection}>
      <Line></Line>
      <h3>Rentals on Map</h3>
      <p>Easy find and apply for your next rental.</p>
      <img src={mapRental} alt="rental-listing-on-map"></img>
    </div>
  );
}
