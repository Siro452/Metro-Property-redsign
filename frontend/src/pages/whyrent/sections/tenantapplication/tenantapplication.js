import SearchButtonRed from "../../../../components/buttons/searchbuttonred";
import styles from "./tenantapplication.module.css";

export default function TenantApplication() {
  return (
    <div className={styles.tenantcontainer}>
      <div className={styles.wordcontainer}>
        <h6>Found a property to call home?</h6>
        <p>
          We assist you with the tenancy application, finding the right
          property, the move and any issues that may arise during your tenancy.
        </p>
      </div>
      <SearchButtonRed buttonTitle="Tenancy Application" />
    </div>
  );
}
