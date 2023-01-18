import background from "../../../../assets/headerbanner.png";
import styles from "./whyrentheader.module.css";
import SearchButtonRed from "../../../../components/buttons/searchbuttonred";

export default function WhyRentHeader() {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={styles.bodybackground}
    >
      <div className={styles.wordscontainer}>
        <h1>Why rent with Metro NZ?</h1>
        <h2>Happy tenants are our mission</h2>
        <p>
          We'll work with you to manage your tenancy to your highest
          expectation. Our property range is comprehensive we can definitely
          find a perfect match for your needs.
        </p>
        <SearchButtonRed
          linkName="/propertiestorent"
          buttonTitle="Find A Property"
        />
      </div>
    </div>
  );
}
