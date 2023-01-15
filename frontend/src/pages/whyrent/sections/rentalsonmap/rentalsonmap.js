import SubHeading from "../../../../components/subheading/subheading";
import mapImg from "../../../../assets/mapimg.png";

export default function RentalsOnMap() {
  return (
    <div>
      <SubHeading
        title="Rentals on Map"
        content="Easy find and apply for your next rental."
      />
      <img src={mapImg} alt="map of rentals available"></img>
    </div>
  );
}
