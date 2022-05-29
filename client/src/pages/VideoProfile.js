import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import User from "../components/User";
import LikeBtn from "../components/LikeBtn";
import Errors from "../components/Errors";
import EditDelete from "../components/EditDelete";

function VideoProfile({currentUser, pathname, onLogout}) {
  const [isLoading, setIsLoading] = useState(true)
  const [video, setVideo] = useState({})
  const [errors, setErrors] = useState([])
  const [error, setError] = useState(null)

  let id = pathname.split("/")[2]

  useEffect(() => {
    fetch(`/videos/${id}`)
      .then((r) => {
        if (r.ok) {
          r.json().then((video) => {
            setIsLoading(false)
            setVideo(video)
          })
        }
      })
  }, [])

  const ifUser = video.user && currentUser ? currentUser.id === video.user.id : null

  return (
    <div className="video-profile">
        {!isLoading ? (
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
                {video.user ? <User user={video.user} video={video} currentUser={currentUser} onLogout={onLogout} /> : <></>}
              </div>
            </div>
            <Comments comments={video.comments} id={id} currentUser={currentUser} />
          </>
        ) : (
          <>
            <h2>Loading...</h2>
          </>
        )}
    </div>
  )
}

export default VideoProfile;