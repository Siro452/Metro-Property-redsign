import Line from "../../../../components/line/line";
import styles from "./customertestimonials.module.css";
import TestimonialCard from "./testimonialcard";
import customer1 from "../../../../assets/customer1.png";
import customer2 from "../../../../assets/customer2.png";
import carosel from "../../../../assets/carosel.png";

export default function CustomerTestimonials() {
  return (
    <div className={styles.header}>
      <Line />
      <h3>Customer Testimonials</h3>
      <p>We value our customers' feedback</p>
      <div className={styles.testimonialscontainer}>
        <TestimonialCard
          customerimg={customer1}
          date="20 Sep, 2022"
          testimonial="Hayley & team have been really good to work with, always super responsive and we've had no issues over the time they managed an apartment we let in Auckland city. Easy to work with and enjoyable experience overall :)"
        />
        <TestimonialCard
          customerimg={customer2}
          date="20 Sep, 2022"
          testimonial="Really positive experience renting with MetroNZ. John Baatjes was amazing, even moved us in on Christmas Eve and gave us lots of help and advice about the local area. Quick responses with emails and a really genuine person. Thank you!"
        />
      </div>
      <div className={styles.caroselbuttons}>
        <img src={carosel} alt="carosel buttons"></img>
      </div>
    </div>
  );
}
