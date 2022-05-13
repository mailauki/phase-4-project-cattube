import { Link } from "react-router-dom";

function Video({video}) {
  // const { title, description, url } = video
  const thumbnail = video.url.split("/")[4]

  return(
    <div className="Video">
      <Link to={`/videos/${video.id}`}>
        {thumbnail === "preview" ? <video className="thumbnail vid" src={video.url+"?autoplay=0showinfo=0&controls=0"} title={video.title} /> : <img className="thumbnail" src={`https://img.youtube.com/vi/${thumbnail}/hqdefault.jpg`} alt={video.title} />}
        <div className="info">
          <div className="title">
            <h3>{video.title}</h3>
            <button>♡</button> {/* ♥ */}
          </div>
          <p>{video.short_description}</p>
        </div>
      </Link>
    </div>
  )
}

export default Video;