import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HomePageBodyHeader from "./sections/bodyheader/homepagebodyheader";
import HomePageServices from "./sections/homepageservices/homepageservices";
import FeaturedRentals from "./sections/featured/featuredrentals";
import RentalMap from "./sections/rentalmap/rentalmap";
import MetroVideo from "./sections/metrovideo/metrovideo";

export default function HomePage() {
  return (
    <div>
      <NavBar></NavBar>
      <HomePageBodyHeader />
      <HomePageServices />
      <FeaturedRentals />
      <RentalMap />
      <MetroVideo />
      <Footer></Footer>
    </div>
  );
}
