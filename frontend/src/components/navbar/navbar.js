import { Routes, Route } from "react-router-dom";
import styles from "./navbar.module.css";
import ContactUsWhite from "../buttons/contactuswhite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <div class="line-2"></div>
          <ContactUsWhite />
        </div>
      </div>
      <div className={styles.lowerheader}>
        <div className={styles.dropdown}>
          <button>HOME</button>
          <button>FOR OWNERS</button>
          <div className={styles.dropdown_owners}>
            <button>Why Choose Us?</button>
            <button>Our Services</button>
            <button>Blog</button>
            <button>Owner Login</button>
          </div>
          <button>FOR TENANTS</button>
          <div className={styles.dropdown_tenant}>
            <button>Renting With Us</button>
            <button>Properties to Rent</button>
            <button>Blog</button>
            <button>Tenancy Application</button>
          </div>
          <button>ABOUT US</button>
          <div className={styles.dropdown_aboutus}>
            <button>Our Services</button>
            <button>Meet the Team</button>
            <button>Careers</button>
            <button>Gallery</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
