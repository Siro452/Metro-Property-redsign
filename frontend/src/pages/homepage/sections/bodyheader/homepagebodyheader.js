import styles from "./homepagebodyheader.module.css";
import SearchButtonRed from "../../../../components/buttons/searchbuttonred";
import background from "../../../../assets/HomepageHeaderBackground.png";

export default function HomePageBodyHeader() {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={styles.bodybackground}
    >
      <div className={styles.wordscontainer}>
        <h2>Property Management Auckland</h2>
        <p>
          Helping clients to achieve harmony through our expertise and skills.
          Check out our tailored services we offer as an Auckland property
          management company.
        </p>
        <SearchButtonRed
          linkName="/propertiestorent"
          buttonTitle={"Find A Property"}
        />
      </div>
    </div>
  );
}
