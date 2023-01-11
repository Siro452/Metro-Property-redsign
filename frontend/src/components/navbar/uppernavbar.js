import styles from "./navbar.module.css";
import ContactUsWhite from "../buttons/contactuswhite";
import { Link } from "react-router-dom";
import faceBook from "../../assets/ic_baseline-facebook.png";
import instagram from "../../assets/ph_instagram-logo-light.png";
import linkedIn from "../../assets/mdi_linkedin.png";

export default function UpperNavbar() {
  return (
    <div className={styles.upperheader}>
      <img
        className={styles.metrologo}
        src="https://metronz.co.nz/wp-content/uploads/2022/09/header-logo.svg"
      ></img>
      <div className={styles.socialmediacontainer}>
        <div className={styles.socialmedia}>
          <a>
            <img src={faceBook} alt="facebook icon"></img>
          </a>

          <a>
            <img src={instagram} alt="instagram icon"></img>
          </a>

          <a>
            <img src={linkedIn} alt="linkedin icon"></img>
          </a>
        </div>
        <ContactUsWhite />
      </div>
    </div>
  );
}
