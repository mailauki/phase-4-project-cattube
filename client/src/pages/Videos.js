import { useState, useEffect } from "react";
import Video from "../components/Video";

function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data))
  }, []);

  return(
    <div className="VideoContainer">
      {videos.length > 0 ? (
        videos.map((video) => (
          <Video key={video.id} video={video} />
        ))
      ) : (
        <>
          <h2>No Videos Found</h2>
        </>
      )}
    </div>
  )
}

export default Videos;