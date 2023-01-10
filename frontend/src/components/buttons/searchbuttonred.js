import styles from "./buttonstyles.module.css";

export default function SearchButtonRed(props) {
  return (
    <button className={styles.searchbuttonred}>{props.buttonTitle}</button>
  );
}
