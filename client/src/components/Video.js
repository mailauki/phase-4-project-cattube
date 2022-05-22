import { Link } from "react-router-dom";
import LikeBtn from "../components/LikeBtn";

function Video({video, currentUser}) {
  const { title, short_description, url } = video
  const thumbnail = url.split("/")[4]

  return(
    <div className="Video">
      <Link to={`/${video.id}`}>
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
        <div className="titleLike">
          <Link to={`/${video.id}`}>
            <h3>{title}</h3>
          </Link>
          <LikeBtn currentUser={currentUser} video={video} />
        </div>
        <Link to={`/${video.id}`}>
          <p>{short_description}</p>
        </Link>
      </div>
    </div>
  )
}

export default Video;