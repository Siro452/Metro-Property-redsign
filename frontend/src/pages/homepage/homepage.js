import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HomePageBodyHeader from "./sections/bodyheader/homepagebodyheader";
import HomePageServices from "./sections/homepageservices/homepageservices";

export default function HomePage() {
  return (
    <div>
      <NavBar></NavBar>
      <HomePageBodyHeader />
      <HomePageServices />
      <Footer></Footer>
    </div>
  );
}
