import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

function VideoProfile() {
  let { id } = useParams()
  const [video, setVideo] = useState({title: "no title", description: "no description", url: "https://www.youtube.com/watch?v=W86cTIoMv2U", user: {username: "no username", videos_total: 0}, comments: {text: "no text", user_name: "no name"}})

  useEffect(() => {
    fetch(`/videos/${id}`)
      .then(res => res.json())
      .then(data => setVideo(data))
  }, []);

  console.log(video)

  return (
    <div className="VideoProfile">
      <div className="videoContent">
        {/* <h3>ID: {id}</h3> */}
        <iframe src={video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <div className="videoInfo">
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <div className="creator">
            <p style={{fontWeight: 600}}>{video.user.username}</p>
            <p>## followers</p>
            <p>{video.user.videos_total} videos</p>
            <button>Follow</button>
          </div>
        </div>
      </div>
      <div className="Comments">
        <h4>Comments</h4>
        {video.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
      </div>
    </div>
  )
}

export default VideoProfile;