import React from 'react'
import styles from "./searchcontainer.module.css";

// Image imports -------------------
import pinicon from "../../assets/pinicon.svg";
import priceicon from "../../assets/priceicon.svg";
import bedicon from "../../assets/bedicon.svg";
import bathicon from "../../assets/bathicon.svg";
import houseicon from "../../assets/houseicon.svg";



export default function SearchContainer(props) {
 

  return (
    <div className={styles.outermostcontainer}>
        <form onSubmit={props.handleSearchSubmit}>
            <span><img src={pinicon} alt="pin location icon" />Location</span>
            <div className={styles.locations}>
                <select id="city" name="address.city" className={styles.locationsinput} onChange={props.handleQuery}>
                    <option value="any">All New Zealand</option>
                    <option value="auckland">Auckland</option>
                    <option value="wellington">Wellington</option>
                    <option value="christchurch">Christchurch</option>
                </select>

                <select id="district" name="address.district" className={styles.locationsinput} onChange={props.handleQuery}>
                    <option value="any">All Districts</option>
                    <option value="auckland city">Auckland City</option>
                    <option value="north shore city">North Shore City</option>
                    <option value="waitakere city">Waitakere City</option>
                </select>

                <select id="suburb" name="address.suburb" className={styles.locationsinput} onChange={props.handleQuery}>
                    <option value="any">Any Suburb</option>
                    <option value="city centre">City Centre</option>
                    <option value="auckland city">Glendene</option>
                    <option value="hillcrest">Hillcrest</option>
                    <option value="meadowbank">Meadowbank</option>
                    <option value="mt roskill">Mt Roskill</option>
                    <option value="mt wellington">Mt Wellington</option>
                    <option value="st marys bay">St Marys Bay</option>
                    <option value="st heliers">St Heliers</option>
                    <option value="city centre">City Centre</option>
                </select>
                <button className={styles.searchbutton} type="submit">SEARCH</button>
            </div>


            <div className={styles.mainfilters}>
                <div className={styles.mainfilter}>
                    <span><img src={priceicon} alt="price icon" />Max Rent/wk</span>
                    <select id="cost" name="cost[lte]" className={styles.mainfiltersinput} onChange={props.handleQuery}>
                        <option value="any" selected>Any</option>
                        <option value="350" >$350</option>
                        <option value="400" >$400</option>
                        <option value="450" >$450</option>
                        <option value="500" >$500</option>
                        <option value="550">$550</option>
                        <option value="600" >$600</option>
                        <option value="650">$650</option>
                        <option value="700">$700</option>
                        <option value="750">$750</option>
                        <option value="800">$800</option>
                        <option value="850">$850</option>
                        <option value="900">$900</option>
                        <option value="950">$950</option>
                        <option value="1000">$1000</option>
                    </select>
                    
                </div>
                <div className={styles.mainfilter}>
                    <span><img src={bedicon} alt="bed icon" />Bedrooms</span>
                    <select id="bedrooms" name="featuredinfo.bedrooms[gte]" className={styles.mainfiltersinput} onChange={props.handleQuery}>
                        <option value="any">Any</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                        <option value="5">5+</option>
                    </select>
                </div>
                <div className={styles.mainfilter}>
                    <span><img src={bathicon} alt="bath icon" />Bathrooms</span>
                    <select id="bathrooms" name="featuredinfo.bathrooms[gte]" className={styles.mainfiltersinput} onChange={props.handleQuery}>
                        <option value="any">Any</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                    </select>
                </div>
                <div className={styles.mainfilter}>
                    <span><img src={houseicon} alt="house icon" />Property Types</span>
                    <select id="housetype" name="featuredinfo.housetype" className={styles.mainfiltersinput} onChange={props.handleQuery}>
                        <option value="any">Any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="unit">Unit</option>
                    </select>
                </div>
            </div>


            <div className={styles.subfilters}>

            </div>

            <div className={styles.checkboxes}>
                <div className={styles.checkboxcolumn}>

                    <span><input type="checkbox" id="close to supermarket" name="featuredinfo.supermarket[lte]" value="1" onChange={props.handleQueryCheckbox}/>
                    <label htmlFor="close to supermarket"> Close to Supermarkets</label></span>
                    <span><input type="checkbox" id="close to gym" name="featuredinfo.gym[lte]" value="1.5" onChange={props.handleQueryCheckbox}/>
                    <label htmlFor="close to gym"> Close to Gym</label></span>
                    <span><input type="checkbox" id="close to park" name="featuredinfo.park" value="1" onChange={props.handleQueryCheckbox}/>
                    <label htmlFor="close to park"> Close to Parks</label></span>
                    
                </div>

                <div className={styles.checkboxcolumn}>

                    <span><input type="checkbox" id="close to cycle path" name="featuredinfo.cyclepath[lte]" value="1.5" onChange={props.handleQueryCheckbox}/>
                    <label htmlFor="close to cycle path"> Close to cycle path</label></span>
                    <span><input type="checkbox" id="close to public transport" name="featuredinfo.publictransport[lte]" value="10" onChange={props.handleQueryCheckbox}/>
                    <label htmlFor="close to public transport"> Close to public transport</label></span>
                    
                </div>

                <div className={styles.checkboxcolumn}>

                    <span><input type="checkbox" id="pet friendly" name="featuredinfo.petfriendly" value="true" onChange={props.handleQueryCheckbox}/>
                    <label htmlFor="pet friendly">Pet Friendly</label></span>
                    <span><input type="checkbox" id="furnished" name="featuredinfo.furnished" value="true" onChange={props.handleQueryCheckbox}/>
                    <label htmlFor="furnished">Furnished</label></span>
                    
                </div>
            </div>
        </form>

    </div>
  )
}
