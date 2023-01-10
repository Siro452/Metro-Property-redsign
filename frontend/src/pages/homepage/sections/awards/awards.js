import styles from "./awards.module.css";
import awardGroup from "../../../../assets/awardgroup.png";
import Line from "../../../../components/line/line";

export default function Awards() {
  return (
    <div className={styles.awardcontainer}>
      <Line />
      <h3>Awards</h3>
      <p>
        Our award for “Excellence in Strategy and Planning” shows that our
        company systems are sound, from initial contact and agreement to looking
        after existing and finding new tenants and managing your property
        long-term.
      </p>
      <img src={awardGroup} alt="group of awards" />
    </div>
  );
}
