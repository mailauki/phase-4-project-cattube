function LikeBtn({currentUser, video, onError}) {

  const ifFound = currentUser ? video.likes ? video.likes.find(like => like.user_id === currentUser.id) : video.likes : null

  function handleLike(e) {
    const liked = currentUser ? {user_id: currentUser.id, video_id: video.id} : null
    
    e.target.className === "not-liked" ? (
      fetch("/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(liked)
      })
        .then((r) => {
          if (r.ok) {
            r.json().then((data) => {
              e.target.classList.remove("not-liked")
              e.target.classList.add("liked")
            })
          } else {
            r.json().then((err) => onError(err.errors))
          }
        })
    ) : (
      fetch(`/${video.id}/unlike`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then((data) => {
          e.target.classList.remove("liked")
          e.target.classList.add("not-liked")
        })
    )
  }

  return(
    <button onClick={handleLike}>{ifFound ? <span className="liked" /> : <span className="not-liked" />}</button>
  )
}

export default LikeBtn;