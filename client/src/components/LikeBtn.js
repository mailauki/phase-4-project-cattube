function LikeBtn({currentUser, video, onError}) {

  const ifFound = currentUser ? video.likes ? video.likes.find(like => like.user_id === currentUser.id) : video.likes : null

  function handleLike(e) {
    fetch("/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentUser ? {user_id: currentUser.id, video_id: video.id} : {})
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => console.log(data))
        } else {
          r.json().then((err) => onError(err.errors))
        }
      })
      .then((data) => {
        console.log(data)
        e.target.classList.remove("not-liked")
        e.target.classList.add("liked")
      })
  }

  return(
    <button onClick={handleLike}>{ifFound ? <span className="liked" /> : <span className="not-liked" />}</button>
  )
}

export default LikeBtn;