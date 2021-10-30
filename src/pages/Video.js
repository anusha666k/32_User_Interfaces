import React from "react";
import ReactPlayer from "react-player";
import { Player } from "video-react";

function Video() {
  return (
        <video width="400" loop autoplay playsinline controls>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>

      Your browser does not support HTML video.
    </video>

//     <div>
//       <ReactPlayer
//         url="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/Reveal_Video_Adidas_x_DP_FINAL_4k-1920bby1080_madh4h.mp4
// "
//         playing
//       />
//     </div>
  );
}

export default Video;
