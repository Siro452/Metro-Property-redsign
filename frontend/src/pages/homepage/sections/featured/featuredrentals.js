import styles from "./featured.module.css";
import Line from "../../../../components/line/line";
import SearchButtonRed from "../../../../components/buttons/searchbuttonred";
import ListingCard from "../../../../components/listingcard/listingcard";

export default function FeaturedRentals() {
  return (
    <div>
      <div>
        <Line />
        <h3>Featured Rentals</h3>
        <p>
          We place high importance to finding a property for you that you will
          feel fully at home in and that you will want to stay in for a long
          time.
        </p>
      </div>
      <SearchButtonRed buttonTitle={"Search All"} />
      <div className={styles.featuredcontainer}>
        <ListingCard />
      </div>
    </div>
  );
}
