import { useState, useEffect } from "react";
import Video from "./Video";

function Videos() {
  const [videos, setVideos] = useState([{title: "no title", description: "no description", url: "https://www.youtube.com/watch?v=W86cTIoMv2U"}]);

  useEffect(() => {
    fetch("/videos")
      .then(res => res.json())
      .then(data => setVideos(data))
  }, []);

  return(
    <div className="VideoContainer">
      {videos.map(video => <Video key={`video${video.id}`} video={video}/>)}
    </div>
  )
}

export default Videos;