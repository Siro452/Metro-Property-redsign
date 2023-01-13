import React from 'react'
import styles from "./searchcontainer.module.css";
import { useState } from 'react'

// Image imports -------------------
import pinicon from "../../assets/pinicon.svg";
import priceicon from "../../assets/priceicon.svg";
import bedicon from "../../assets/bedicon.svg";
import bathicon from "../../assets/bathicon.svg";
import houseicon from "../../assets/houseicon.svg";



export default function SearchContainer(props) {
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [suburb, setSuburb] = useState("");
    const [cost, setCost] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [houseType, setHouseType] = useState("");

    const [valueToSend, setValueToSend]= useState("")

    const [testingValue, setTestingValue] = useState({"featuredinfo.bedrooms": {"$gte": 5}, "featuredinfo.petfriendly": true})
    // const [testingValue, setTestingValue] = useState({"featuredinfo.bedrooms": 3})


    function handleCity(e){
        if (e.target.value != "all new zealand"){
            setCity({"address.city": (e.target.value)})
        }else {
            setCity(false)
        }
    }

    function handleDistrict(e){
        if (e.target.value != "all districts"){
            setDistrict({"address.district": (e.target.value)})
        }else{
            setDistrict(false)
        }
    }

    function handleSuburb(e){
        if (e.target.value != "all suburbs"){
            setSuburb({"address.suburb": (e.target.value)})
        }else {
            setSuburb(false)
        }
    }

    function handleCost(e){
        if (e.target.value != "any"){
            setCost({"cost": {"$lte": parseInt(e.target.value)}})
        }else {
            setCost(false)
        }
    }

    function handleBedrooms(e){
        if (e.target.value != "any"){
            setBedrooms({"featuredinfo.bedrooms": {"$lte": parseInt(e.target.value)}})
        }else {
            setBedrooms(false)
        }
    }

    function handleBathrooms(e){
        if (e.target.value != "any"){
            setBathrooms({"featuredinfo.bathrooms": {"$lte": parseInt(e.target.value)}})
        }else {
            setBathrooms(false)
        }
    }

    function handleHouseType(e){
        if (e.target.value != "any"){
            setHouseType({"featuredinfo.housetype": (e.target.value)})
        }else {
            setHouseType(false)
        }
    }

    


    function handleSpread(){
        setValueToSend("")

        const searchData = [city, suburb, district, cost, bedrooms, bathrooms, houseType]

        const filteredSearchData = searchData.filter(Boolean)
        console.log(filteredSearchData)

        let dataToSet= []

        // const mappedData = filteredSearchData.map((filter) =>{
        //     dataToSet = {...dataToSet, ...filter}
        //     console.log(dataToSet)
        //     return dataToSet
        // })

        const mappedData = filteredSearchData.map((filter) =>{
            dataToSet = {...dataToSet, ...filter}
            console.log(dataToSet)
            // return dataToSet
        })

        // let newArray2 = {}
        // if (city) {
        //     newArray2 = {...newArray2, ...city}
        // }
        // const newArray = ({...value, ...city, ...district, ...suburb})
        // setValue(newArray)
        // setValue({...city, ...district, ...suburb})
        // console.log(value)
        console.log(dataToSet)
        console.log(mappedData)
        // setValueToSend(mappedData)
        setValueToSend(dataToSet)
    }



    // const handleTest = () => {
    //     console.log(testingValue);
    //     fetch("http://localhost:8080/testing2", {
    //       method: "POST",
    //       body: JSON.stringify({
    //         testingValue,
    //       }),
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //       },
    //     })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         console.log(data);
    //       })
    //       .catch((err) => {
    //         console.log(err.message);
    //       });
    //   };

      const handleTest = () => {
        console.log(valueToSend);
        fetch("http://localhost:8080/testing2", {
          method: "POST",
          body: JSON.stringify({
            valueToSend,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };

    //   const handleTest = () => {
    //     console.log(valueToSend);
    //     fetch("http://localhost:8080/testing2", {
    //       method: "POST",
    //       body: 
    //         valueToSend,
          
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //       },
    //     })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         console.log(data);
    //       })
    //       .catch((err) => {
    //         console.log(err.message);
    //       });
    //   };


  return (
    <div className={styles.outermostcontainer}>
        <form>
        <span><img src={pinicon} alt="pin location icon" />Location</span>
        <div className={styles.locations}>
            <select id="location" name="location" className={styles.locationsinput} onChange={handleCity}>
                <option value="all new zealand">All New Zealand</option>
                <option value="auckland">Auckland</option>
                <option value="wellington">Wellington</option>
                <option value="christchurch">Christchurch</option>
            </select>

            <select id="district" name="district" className={styles.locationsinput} onChange={handleDistrict}>
                <option value="all districts">All Districts</option>
                <option value="auckland city">Auckland City</option>
                <option value="north shore city">North Shore City</option>
                <option value="waitakere city">Waitakere City</option>
            </select>

            <select id="suburb" name="suburb" className={styles.locationsinput} onChange={handleSuburb}>
                <option value="all suburbs">Any Suburb</option>
                <option value="city centre">City Centre</option>
                <option value="auckland city">Glendene</option>
                <option value="hilcrest">Hillcrest</option>
                <option value="meadowbank">Meadowbank</option>
                <option value="mt roskill">Mt Roskill</option>
                <option value="mt wellington">Mt Wellington</option>
                <option value="st marys bay">St Marys Bay</option>
                <option value="st heliers">St Heliers</option>
                <option value="city centre">City Centre</option>
            </select>
            <button className={styles.searchbutton}>SEARCH</button>
        </div>


        <div className={styles.mainfilters}>
            <div className={styles.mainfilter}>
                <span><img src={priceicon} alt="price icon" />Max Rent/wk</span>
                <select id="price" name="price" className={styles.mainfiltersinput} onChange={handleCost}>
                    <option value="any">Any</option>
                    <option value="450" >$450</option>
                    <option value="550" >$500</option>
                    <option value="550">$550</option>
                    <option value="600">$600</option>
                    <option value="650">$650</option>
                    <option value="700">$700</option>
                    <option value="750">$750</option>
                    <option value="800">$800</option>
                </select>
                
            </div>
            <div className={styles.mainfilter}>
                <span><img src={bedicon} alt="bed icon" />Bedrooms</span>
                <select id="bedrooms" name="bedrooms" className={styles.mainfiltersinput} onChange={handleBedrooms}>
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
                <select id="bathrooms" name="bathrooms" className={styles.mainfiltersinput} onChange={handleBathrooms}>
                    <option value="any">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                </select>
            </div>
            <div className={styles.mainfilter}>
                <span><img src={houseicon} alt="house icon" />Property Types</span>
                <select id="property type" name="property type" className={styles.mainfiltersinput} onChange={handleHouseType}>
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

                <span><input type="checkbox" id="close to supermarket" name="close to supermarket" value="close to supermarket" />
                <label htmlFor="close to supermarket"> Close to Supermarkets</label></span>
                <span><input type="checkbox" id="close to gym" name="close to gym" value="close to gym" />
                <label htmlFor="close to gym"> Close to Gym</label></span>
                <span><input type="checkbox" id="close to park" name="close to park" value="close to park" />
                <label htmlFor="close to park"> Close to Parks</label></span>
                
            </div>

            <div className={styles.checkboxcolumn}>

                <span><input type="checkbox" id="close to cycle path" name="close to cycle path" value="close to cycle path" />
                <label htmlFor="close to cycle path"> Close to cycle path</label></span>
                <span><input type="checkbox" id="close to public transport" name="close to public transport" value="close to public transport" />
                <label htmlFor="close to public transport"> Close to public transport</label></span>
                
            </div>

            <div className={styles.checkboxcolumn}>

                <span><input type="checkbox" id="pet friendly" name="pet friendly" value="pet friendly" />
                <label htmlFor="pet friendly">Pet Friendly</label></span>
                <span><input type="checkbox" id="furnished" name="furnished" value="furnished" />
                <label htmlFor="furnished">Furnished</label></span>
                
            </div>
        </div>
        </form>
        <button onClick={handleTest}>Press me</button>
        <button onClick={handleSpread}>Spread it</button>

    </div>
  )
}
