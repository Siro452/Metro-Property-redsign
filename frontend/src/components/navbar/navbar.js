import { Routes, Route } from "react-router-dom";
import styles from "./navbar.module.css";
import ContactUsWhite from "../buttons/contactuswhite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <nav>
      <div className={styles.upperheader}>
        <img
          className={styles.metrologo}
          src="https://metronz.co.nz/wp-content/uploads/2022/09/header-logo.svg"
        ></img>

        <div>
          <div className={styles.socialmedia}>
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </div>
          <div class="Line-2"></div>
          <ContactUsWhite />
        </div>
      </div>
      <div className={styles.lowerheader}>
        <ul>
          <li>HOME</li>
          <li>FOR OWNERS</li>
          <li>FOR TENANTS</li>
          <li>ABOUT US</li>
        </ul>
      </div>
    </nav>
  );
}
