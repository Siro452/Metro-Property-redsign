import styles from "./navbar.module.css";
import ContactUsWhite from "../buttons/contactuswhite";
import { Link } from "react-router-dom";
import faceBook from "../../assets/ic_baseline-facebook.png";
import instagram from "../../assets/ph_instagram-logo-light.png";
import linkedIn from "../../assets/mdi_linkedin.png";

export default function UpperNavbar() {
  return (
    <div className={styles.upperheader}>
      <Link className={styles.metrologo} to="/">
        <img src="https://metronz.co.nz/wp-content/uploads/2022/09/header-logo.svg"></img>
      </Link>

      <div className={styles.socialmediacontainer}>
        <div className={styles.socialmedia}>
          <a href="https://www.facebook.com/bangtan.official/">
            <img src={faceBook} alt="facebook icon"></img>
          </a>

          <a href="https://www.instagram.com/bts.bighitofficial/?hl=en">
            <img src={instagram} alt="instagram icon"></img>
          </a>

          <a href="https://www.linkedin.com/company/metro-nz-property-management-ltd/">
            <img src={linkedIn} alt="linkedin icon"></img>
          </a>
        </div>
        <ContactUsWhite />
      </div>
    </div>
  );
}
