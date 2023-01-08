import React from 'react'
import styles from "./searchcontainer.module.css";

// Image imports -------------------
import pinicon from "../../assets/pinicon.svg";
import priceicon from "../../assets/priceicon.svg";
import bedicon from "../../assets/bedicon.svg";
import bathicon from "../../assets/bathicon.svg";
import houseicon from "../../assets/houseicon.svg";


export default function searchcontainer() {
  return (
    <div className={styles.outermostcontainer}>
        <form>
        <span><img src={pinicon} alt="pin location icon" />Location</span>
        <div className={styles.locations}>
            <select id="location" name="location" className={styles.locationsinput}>
                <option value="All New Zealand">All New Zealand</option>
                <option value="auckland">Auckland</option>
                <option value="wellington">Wellington</option>
                <option value="christchurch">Christchurch</option>
            </select>

            <select id="district" name="district" className={styles.locationsinput}>
                <option value="All New Zealand">All Districts</option>
                <option value="auckland city">Auckland City</option>
                <option value="north shore city">North Shore City</option>
                <option value="waitakere city">Waitakere City</option>
            </select>

            <select id="suburb" name="suburb" className={styles.locationsinput}>
                <option value="All New Zealand">City Centre</option>
                <option value="auckland city">Glendene</option>
                <option value="hilcrest">Hillcrest</option>
                <option value="meadowbank">Meadowbank</option>
                <option value="mt roskill">Mt Roskill</option>
                <option value="mt wellington">Mt Wellington</option>
                <option value="st marys bay">St Marys Bay</option>
            </select>
            <button className={styles.searchbutton}>SEARCH</button>
        </div>


        <div className={styles.mainfilters}>
            <div className={styles.mainfilter}>
                <span><img src={priceicon} alt="price icon" />Max Rent/wk</span>
                <select id="price" name="price" className={styles.mainfiltersinput}>
                    <option value="$450">$450</option>
                    <option value="$500">$500</option>
                    <option value="$550">$550</option>
                    <option value="$600">$600</option>
                    <option value="$650">$650</option>
                    <option value="$700">$700</option>
                    <option value="$750">$750</option>
                    <option value="$800">$800</option>
                </select>
                
            </div>
            <div className={styles.mainfilter}>
                <span><img src={bedicon} alt="bed icon" />Bedrooms</span>
                <select id="bedrooms" name="bedrooms" className={styles.mainfiltersinput}>
                    <option value="any">Any</option>
                    <option value="1+">1+</option>
                    <option value="2+">2+</option>
                    <option value="3+">3+</option>
                    <option value="$4+">$4+</option>
                    <option value="5+">5+</option>
                </select>
            </div>
            <div className={styles.mainfilter}>
                <span><img src={bathicon} alt="bath icon" />Bathrooms</span>
                <select id="bathrooms" name="bathrooms" className={styles.mainfiltersinput}>
                    <option value="any">Any</option>
                    <option value="1+">1+</option>
                    <option value="2+">2+</option>
                    <option value="3+">3+</option>
                </select>
            </div>
            <div className={styles.mainfilter}>
                <span><img src={houseicon} alt="house icon" />Property Types</span>
                <select id="property type" name="property type" className={styles.mainfiltersinput}>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Unit">Unit</option>
                </select>
            </div>
        </div>


        <div className={styles.subfilters}>

        </div>

        <div className={styles.checkboxes}>
            <div className={styles.checkboxcolumn}>

                <span><input type="checkbox" id="close to supermarket" name="close to supermarket" value="close to supermarket" />
                <label for="close to supermarket"> Close to Supermarkets</label></span>
                <span><input type="checkbox" id="close to gym" name="close to gym" value="close to gym" />
                <label for="close to gym"> Close to Gym</label></span>
                <span><input type="checkbox" id="close to park" name="close to park" value="close to park" />
                <label for="close to park"> Close to Parks</label></span>
                
            </div>

            <div className={styles.checkboxcolumn}>

                <span><input type="checkbox" id="close to cycle path" name="close to cycle path" value="close to cycle path" />
                <label for="close to cycle path"> Close to cycle path</label></span>
                <span><input type="checkbox" id="close to public transport" name="close to public transport" value="close to public transport" />
                <label for="close to public transport"> Close to public transport</label></span>
                
            </div>

            <div className={styles.checkboxcolumn}>

                <span><input type="checkbox" id="pet friendly" name="pet friendly" value="pet friendly" />
                <label for="pet friendly">Pet Friendly</label></span>
                <span><input type="checkbox" id="furnished" name="furnished" value="furnished" />
                <label for="furnished">Furnished</label></span>
                
            </div>
        </div>
        </form>


    </div>
  )
}