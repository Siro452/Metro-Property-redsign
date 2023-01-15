import SubHeading from "../../../../components/subheading/subheading";
import tenantJourney from "../../../../assets/tenantjourney.png";

export default function TenantJourney() {
  return (
    <div>
      <SubHeading title="Your Tenant Journey" />
      <img src={tenantJourney}></img>
    </div>
  );
}
