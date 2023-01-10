import styles from "./customertestimonials.module.css";

export default function TestimonialCard(props) {
  return (
    <div className={styles.testimonialcard}>
      <img src={props.customerimg}></img>
      <div className={styles.textcontainer}>
        <p>{props.date}</p>
        <p>{props.testimonial}</p>
      </div>
    </div>
  );
}
