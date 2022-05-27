function FollowBtn({currentUser, user, onError}) {

  function handleFollow() {
    const following = currentUser ? {followee_id: user.id, follower_id: currentUser.id} : null
    fetch("/follow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(following)
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
    <>
      <button onClick={handleFollow} className="button">Follow</button>
    </>
  )
}

export default FollowBtn;