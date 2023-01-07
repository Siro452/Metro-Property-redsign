import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HomePageBodyHeader from "./sections/bodyheader/homepagebodyheader";

export default function HomePage() {
  return (
    <div>
      <NavBar></NavBar>
      <HomePageBodyHeader />
      <Footer></Footer>
    </div>
  );
}
