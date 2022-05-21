function FollowBtn({currentUser, user, onError}) {

  function handleFollow() {
    let following

    if(currentUser) {
      following = {followee_id: user.id, follower_id: currentUser.id}
    }
    else {
      following = {followee_id: user.id, follower_id: currentUser}
    }

    fetch("/follow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(following),
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