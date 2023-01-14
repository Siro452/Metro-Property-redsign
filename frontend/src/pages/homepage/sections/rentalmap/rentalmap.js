import styles from "./rentalmap.module.css";
import mapRental from "../../../../assets/rentalonmap.png";
import SubHeading from "../../../../components/subheading/subheading";

const rentalMapStyle = {
  width: "150%",
};

export default function RentalMap() {
  return (
    <div className={styles.rentalmapsection}>
      <SubHeading
        title="Rentals on Map"
        content="Easy find and apply for your next rental."
        style={rentalMapStyle}
      />

      <img src={mapRental} alt="rental-listing-on-map"></img>
    </div>
  );
}
