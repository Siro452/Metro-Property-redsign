import React from 'react'
import styles from "./footer.module.css";

import housePhoto from "../../assets/HouseTempPhoto.png"
import facebook from "../../assets/facebooklogo.svg"
import instagram from "../../assets/instagramlogo.svg"
import linkedin from "../../assets/linkedinlogo.svg"
import twitter from "../../assets/twitterlogo.svg"

import ContactUsRed from '../buttons/contactusred';

export default function footer() {
  return (
    <div className={styles.outermostcontainer}>

        <div className={styles.footercontent}>
            <div className={styles.footerblurb}>Metro NZ Property Management has offices conveniently located in Central Auckland, but operates throughout New Zealand and also internationally.</div>

            <div className={styles.iconsection}>
                <div className={styles.logosection}>
                    <img className={styles.metrologo} src="https://metronz.co.nz/wp-content/uploads/2022/09/header-logo.svg" alt="metrologo" />
                    <p className={styles.address}>Level 33, ANZ Centre, 23-29 Albert St,<br /> Auckland 1010, New Zealand</p>
                </div>
                <div className={styles.socialssection}>
                    <ContactUsRed />
                    <div className={styles.socialmediaicons}>
                        <a href="https://www.facebook.com/bangtan.official/"><div className={styles.socialmediaicon}><img src={facebook} alt="facebook icon" /></div></a>
                        <a href="https://www.instagram.com/bts.bighitofficial/?hl=en"><div className={styles.socialmediaicon}><img src={instagram} alt="instagram icon" /></div></a>
                        <div className={styles.socialmediaicon}><img src={linkedin} alt="linkedin icon" /></div>
                        <a href="https://twitter.com/bts_twt"><div className={styles.socialmediaicon}><img src={twitter} alt="twitter icon" /></div></a>
                    </div>
                </div>
            </div>

            <div className={styles.contactdetails}>
                <div>© 2022 Metro NZ Property Management | Disputes Process</div>
                <div>09 391 4642 | +64 21 642 119 | info@metronz.co.nz</div>
            </div>
        </div>
        
        <img classname={styles.housephoto} src={housePhoto} alt="modern house" />
        <div className={styles.photogradient}></div>

       
    
    </div>
  )
}
