function Likes({likes}) {
  return(
    <div className="Likes">
        <h4>Liked Videos</h4>
        {likes ? (
          likes.length > 0 ? (
            likes.map(like => (
              <div key={like.id} className="items">
                <h5>{like.video_title}</h5>
                <p>{like.video_likes_total} likes</p>
              </div>
            ))
          ) : (
            <p className="none">Not Liked Any Videos</p>
          )
        ) : (
          <p className="none">Not Liked Any Videos</p>
        )
        }
      </div>
  )
}

export default Likes;