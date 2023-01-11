import styles from "./homepageservices.module.css";

export default function ServiceCard(props) {
  return (
    <div className={styles.servicecard}>
      <img src={props.cardImg} alt={props.imgDesc}></img>
      <h5>{props.heading}</h5>
      <p>{props.subHeading}</p>
    </div>
  );
}
