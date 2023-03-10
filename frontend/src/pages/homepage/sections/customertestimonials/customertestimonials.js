import styles from "./customertestimonials.module.css";
import TestimonialCard from "./testimonialcard";
import customer1 from "../../../../assets/customer1.png";
import customer2 from "../../../../assets/customer2.png";
import carosel from "../../../../assets/carosel.png";
import SubHeading from "../../../../components/subheading/subheading";

export default function CustomerTestimonials() {
  return (
    <div className={styles.header}>
      <SubHeading
        title="Customer Testimonials"
        content="We value our customers' feedback"
      />

      <div className={styles.testimonialscontainer}>
        <TestimonialCard
          customerimg={customer1}
          imgDesc="girl who looks like Ashley from The Boys"
          date="20 Sep, 2022"
          testimonial="Hayley & team have been really good to work with, always super responsive and we've had no issues over the time they managed an apartment we let in Auckland city. Easy to work with and enjoyable experience overall :)"
        />
        <TestimonialCard
          customerimg={customer2}
          imgDesc="Girl who holds ice cream"
          date="20 Sep, 2022"
          testimonial="Really positive experience renting with MetroNZ. Park Jimin was amazing, even moved us in on Christmas Eve and gave us lots of help and advice about the local area. Quick responses with emails and a really genuine person. Thank you!"
        />
      </div>
      <div className={styles.caroselbuttons}>
        <img src={carosel} alt="carosel buttons"></img>
      </div>
    </div>
  );
}
