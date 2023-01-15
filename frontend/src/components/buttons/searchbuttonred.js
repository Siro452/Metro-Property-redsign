import styles from "./buttonstyles.module.css";
import { Link } from "react-router-dom";

export default function SearchButtonRed(props) {
  return (
    <Link to={props.linkName}>
      <button className={styles.searchbuttonred}>{props.buttonTitle}</button>
    </Link>
  );
}
