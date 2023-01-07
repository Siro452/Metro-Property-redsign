import styles from "./buttonstyles.module.css";

export default function SearchButtonRed(props) {
  return (
    <div>
      <button className={styles.searchbuttonred}>{props.buttonTitle}</button>
    </div>
  );
}
