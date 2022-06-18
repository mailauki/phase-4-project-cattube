import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LikeBtn from "../components/LikeBtn";
import EditDelete from "../components/EditDelete";
import Errors from "../components/Errors";

function Video({video, currentUser, pathname}) {
  const thumbnail = video.url.split("/")[4]

  const [errors, setErrors] = useState([])

  const ifUser = video.user_id && currentUser ? currentUser.id === video.user_id : null
  
  const { id, title, short_description, url } = video

  return(
    <div className="Video">
      <Link to={`/videos/${id}`}>
        {thumbnail ? (
          thumbnail === "preview" ? (
              <video className="thumbnail vid" src={url} title={title} />
            ) : (
              <img className="thumbnail" src={`https://img.youtube.com/vi/${thumbnail}/hqdefault.jpg`} alt={title} />
            )
        ) : (
          <img className="thumbnail" src="https://via.placeholder.com/560x315" alt="placeholder" />
        )}
      </Link>
      <div className="info">
        <div className={ifUser ? "title-edit-delete": "title-like"}>
          <Link to={`/videos/${id}`}>
            <h3>{title}</h3>
          </Link>
          {ifUser ? <EditDelete video={video} currentUser={currentUser} /> : <LikeBtn currentUser={currentUser} video={video} onError={setErrors} />}
        </div>
        <Errors errors={errors} />
        <Link to={`/${id}`}>
          <p>{short_description}</p>
        </Link>
      </div>
    </div>
  )
}

export default Video;