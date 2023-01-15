import NavBar from "../../components/navbar/navbar";
import FeaturedRentals from "../../components/featured/featuredrentals";
import RentalsOnMap from "./sections/rentalsonmap/rentalsonmap";
import TenantJourney from "./sections/tenantjourney/tenantjourney";
import WhyRentHeader from "./sections/whyrentheader/whyrentheader";

export default function WhyRent() {
  return (
    <div>
      <NavBar />
      <WhyRentHeader />
      <TenantJourney />
      <RentalsOnMap />

      <FeaturedRentals />
    </div>
  );
}
