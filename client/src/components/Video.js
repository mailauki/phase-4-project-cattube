import { Link } from "react-router-dom";

function Video({video, pathname}) {
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
        <div className="info">
          <div className="title">
            <h3>{title}</h3>
            <button>♡</button> {/* ♥ */}
          </div>
          {pathname === "/" ? <p>{short_description}</p> : <></> }
        </div>
      </Link>
    </div>
  )
}

export default Video;