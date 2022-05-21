import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import User from "../components/User";

function VideoProfile({currentUser}) {
  let { id } = useParams()
  const [video, setVideo] = useState({})

  useEffect(() => {
    fetch(`/videos/${id}`)
      .then(res => res.json())
      .then(data => setVideo(data))
  }, [])

  return (
    <div className="VideoProfile">
        {video ? (
          <>
            <div className="videoContent">
              <iframe src={video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              <div className="videoInfo">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <User user={video.user} currentUser={currentUser} />
              </div>
            </div>
            <Comments comments={video.comments} id={id} currentUser={currentUser} />
          </>
        ) : (
          <>
            <h2>No Video Found</h2>
          </>
        )}
    </div>
  )
}

export default VideoProfile;