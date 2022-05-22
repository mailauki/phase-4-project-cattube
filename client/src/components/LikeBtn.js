function LikeBtn({currentUser, video, onError}) {

  const found = currentUser ? video.likes ? video.likes.find(like => like.user_id === currentUser.id) : video.likes : null

  function handleLike() {
    fetch("/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({user_id: currentUser ? currentUser : currentUser, video_id: video.id}),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => console.log(data))
        } else {
          r.json().then((err) => onError(err.errors))
        }
      })
  }

  return(
    <button onClick={handleLike}>{found ? <span className="liked" /> : <span className="not-liked" />}</button>
  )
}

export default LikeBtn;