import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import User from "../components/User";
import LikeBtn from "../components/LikeBtn";
import Errors from "../components/Errors";
import EditDelete from "../components/EditDelete";

function VideoProfile({currentUser, pathname, onLogout}) {
  // let { id } = useParams()
  const [video, setVideo] = useState({})
  const [errors, setErrors] = useState([])
  const [error, setError] = useState(null)

  let id = pathname.split("/")[2]
  // console.log(useParams())

  useEffect(() => {
    fetch(`/videos/${id}`)
      .then((r) => {
        if (r.ok) {
          r.json().then((video) => setVideo(video))
        }
      })
  }, [])

  const ifUser = video.user && currentUser ? currentUser.id === video.user.id : null

  // console.log({id})
  // console.log(video)

  return (
    <div className="video-profile">
        {video ? (
          <>
            <div className="video-content">
              <iframe src={video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              <div className="video-info">
                <div className={ifUser ? "title-edit-delete": "title-like"}>
                  <h3>{video.title}</h3>
                  {ifUser ? <EditDelete video={video} /> : <LikeBtn currentUser={currentUser} video={video} onError={setErrors} />}
                </div>
                <Errors errors={errors} />
                <p>{video.description}</p>
                <User user={video.user} currentUser={currentUser} onLogout={onLogout} />
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