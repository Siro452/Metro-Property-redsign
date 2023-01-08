import styles from "./homepageservices.module.css";
import ServiceCard from "./servicecard";
import serviceCard1 from "../../../../assets/servicecard1.png";
import serviceCard2 from "../../../../assets/servicecard2.png";
import serviceCard3 from "../../../../assets/servicecard3.png";
import serviceCard4 from "../../../../assets/servicecard4.png";

export default function HomePageServices() {
  return (
    <div className={styles.section}>
      <div className={styles.servicecontainer}>
        <div className={styles.line}></div>
        <h3>Services That We Offer</h3>
        <p>
          Our property management services are comprehensive and encompass the
          full range of owner and tenants needs.
        </p>
      </div>
      <div className={styles.cardcontainer}>
        <ServiceCard
          cardImg={`${serviceCard1}`}
          heading={"Learn more about renting with Metro NZ"}
          subHeading={"Steps on how to rent with Metro NZ"}
        />
        <ServiceCard
          cardImg={`${serviceCard2}`}
          heading={"Tenancy Application"}
          subHeading={
            "Our property range is comprehensive we can definitely find a perfect match for your needs"
          }
        />
        <ServiceCard
          cardImg={`${serviceCard3}`}
          heading={"Free Rental Apprasial"}
          subHeading={
            "We conduct a thorough appraisal of your property that you want to put up for rent based on the current rent market at that moment"
          }
        />
        <ServiceCard
          cardImg={`${serviceCard4}`}
          heading={"Property Management Services"}
          subHeading={
            "We have well over 20 years experience with managing properties. We pride ourselves on our professionalism at every level"
          }
        />
      </div>
    </div>
  );
}
