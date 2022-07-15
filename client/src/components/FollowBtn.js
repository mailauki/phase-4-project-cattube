function FollowBtn({currentUser, user, onError, onFollow, isFollowing}) {

  function handleFollow(e) {
    const following = currentUser ? {followee_id: user.id, follower_id: currentUser.id} : null

    isFollowing ? (
      fetch(`/friendships/${user.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then((r) => {
          onFollow(false)
        })
      ) : (
        fetch("/friendships", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(following)
        })
          .then((r) => {
            if (r.ok) {
              r.json().then((data) => {
                onFollow(true)
              })
            } else {
              r.json().then((err) => onError(err.errors))
            }
          })
      )
  }

  return(
    <>
      <button onClick={handleFollow} className="button">{isFollowing ? "Unfollow" : "Follow"}</button>
    </>
  )
}

export default FollowBtn;