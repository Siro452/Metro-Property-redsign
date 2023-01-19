import React from "react";
import styles from "./imageslidercomponent.module.css";
import { useState } from "react";

export default function ImageSliderComponent(props) {
  const imgs = props.pictData.image.galleryimg;

  const [imgData, setImgData] = useState(0);

  const handleClick = (index) => {
    console.log(index);
    const imgSlider = imgs[index];
    setImgData(index);
  };

  return (
    <div className={styles.outermostcontainer}>
      <img src={imgs[imgData]} height="35%" width="70%" />
      <div className={styles.flex_row}>
        {imgs.map((thumbnail, index) => {
          return (
            <div className={styles.thumbnail} key={index}>
              <img
                className={imgData.id == index ? "styles.clicked" : ""}
                src={thumbnail}
                onClick={() => handleClick(index)}
                height="145"
                width="258"
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
