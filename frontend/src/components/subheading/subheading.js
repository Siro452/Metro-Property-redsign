import styles from "./subheading.module.css";
import Line from "../line/line";

export default function SubHeading(props) {
  return (
    <div className={styles.titlecontainer}>
      <Line />
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}
