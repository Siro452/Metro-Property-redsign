import styles from "./metrovideo.module.css";
import ReactPlayer from "react-player/youtube";
import videoThumbNail from "../../../../assets/metrovideothumnail.png";
import iconplay from "../../../../assets/playicon.png";

export default function MetroVideo() {
  return (
    <div className={styles.vidcontainer}>
      <h3>Metro NZ - A Bespoke Auckland Property Management Company</h3>
      <ReactPlayer
        className={styles.videoplayer}
        light={videoThumbNail}
        url="https://www.youtube.com/watch?v=kTlv5_Bs8aw"
        playing
        playIcon={<img src={iconplay}></img>}
        controls="true"
      />
    </div>
  );
}
