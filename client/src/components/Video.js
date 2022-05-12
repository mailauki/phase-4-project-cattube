import { Link } from "react-router-dom";

function Video({video}) {
  const { id, title, description, url } = video
  const thumbnail = url.split("/")[4]

  return(
    <div className="Video" onClick={(event) => console.log(video)}>
      <Link to={`/videos/${id}`}>
        {thumbnail === "preview" ? <video src={url+"?autoplay=0showinfo=0&controls=0"} title={title} frameborder="0" /> : <img src={`https://img.youtube.com/vi/${thumbnail}/hqdefault.jpg`} alt={title} />}
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  )
}

export default Video;