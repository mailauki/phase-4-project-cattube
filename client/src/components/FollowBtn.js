function FollowBtn({currentUser, user, onError}) {

  function handleFollow() {

    fetch("/follow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({followee_id: user.id, follower_id: currentUser ? currentUser : currentUser}),
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
      <button onClick={handleFollow}>Follow</button>
    </>
  )
}

export default FollowBtn;