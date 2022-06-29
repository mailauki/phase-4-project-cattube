import { Link } from "react-router-dom";

function Likes({likedVideos}) {
  return(
    <div className="Likes">
      <h4>Liked Videos</h4>
      {likedVideos ? (
        likedVideos.length > 0 ? (
          likedVideos.map(likedVideo => (
            <Link to={`/videos/${likedVideo.id}`}>
              <div key={likedVideo.id} className="items">
                <h5>{likedVideo.title}</h5>
                <p>{likedVideo.likes_total} likes</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="none">Not Liked Any Videos</p>
        )
      ) : (
        <p className="none">Not Liked Any Videos</p>
      )}
    </div>
  )
}

export default Likes;