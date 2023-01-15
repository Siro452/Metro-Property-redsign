import SubHeading from "../../../../components/subheading/subheading";
import tenantJourney from "../../../../assets/tenantjourney.png";
import styles from "./tenantjourney.module.css";

export default function TenantJourney() {
  return (
    <div className={styles.container}>
      <SubHeading title="Your Tenant Journey" />
      <img src={tenantJourney}></img>
    </div>
  );
}
