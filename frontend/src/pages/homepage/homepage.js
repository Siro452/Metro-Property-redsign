import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HomePageBodyHeader from "./sections/bodyheader/homepagebodyheader";
import HomePageServices from "./sections/homepageservices/homepageservices";
import FeaturedRentals from "../../components/featured/featuredrentals";
import RentalMap from "./sections/rentalmap/rentalmap";
import MetroVideo from "./sections/metrovideo/metrovideo";
import CustomerTestimonials from "./sections/customertestimonials/customertestimonials";
import Awards from "./sections/awards/awards";

export default function HomePage() {
  return (
    <div>
      <NavBar></NavBar>
      <HomePageBodyHeader />
      <HomePageServices />
      <FeaturedRentals />
      <RentalMap />
      <MetroVideo />
      <CustomerTestimonials />
      <Awards />
      <Footer></Footer>
    </div>
  );
}
