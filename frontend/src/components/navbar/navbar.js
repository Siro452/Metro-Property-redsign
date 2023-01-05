import { Routes, Route } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <div className={styles.upperheader}>
        <div className={styles.metrologo}></div>
        <div>
          <div className={styles.socialmedia}></div>
          <div>button</div>
        </div>
      </div>
      <div className={styles.lowerheader}>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
