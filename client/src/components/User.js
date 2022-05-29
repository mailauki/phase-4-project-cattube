import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import FollowBtn from "../components/FollowBtn";
import Errors from "../components/Errors";

function User({user, currentUser, pathname, onLogout}) {
  const [updatedUser, setUpdatedUser] = useState(user)
  const [errors, setErrors] = useState([])
  const [isFollowing, setIsFollowing] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const history = useHistory()

  useEffect(() => {
    if (currentUser) {
      fetch("/me")
          .then((r) => {
            if (r.ok) {
              r.json().then((currentUser) => {
                setIsLoading(false)
                if (currentUser.followees.find(followee => followee.id === user.id)) {
                  setIsFollowing(true)
                }
                else {
                  setIsFollowing(false)
                }
              })
            }
          })
    }
  }, [pathname])
  
  function handleLogout() {
    console.log("logout")

    fetch("/logout", {
      method: "DELETE"
    })
      .then((r) => {
        if(r.ok) {
          onLogout(null)
          history.push("/")
        }
      })
  }

  function handleFollow(following) {
    fetch(`/${user.username}`)
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setUpdatedUser(user)
            setIsFollowing(following)
          })
        }
      })
  }

  const ifUser = user && currentUser ? currentUser.id === user.id : null

  return(
    <>
      <div className="creator">
        {!isLoading ? (
          <>
            <Link to={ifUser ? "/me" : `/${updatedUser.username}`}>
              <p style={{fontWeight: 600}}>{updatedUser.username}</p>
            </Link>
            <p>{updatedUser.followers_total} followers</p>
            <p>{updatedUser.videos_total} videos</p>
            {ifUser ? (
              <button onClick={handleLogout} className="button">Logout</button>
            ) : (
              <FollowBtn currentUser={currentUser} user={updatedUser} onError={setErrors} onFollow={handleFollow} isFollowing={isFollowing} />
            )}
          </>
        ) : (
          <>
            <p>No User Found</p>
          </>
        )}
      </div>
    <Errors errors={errors} />
    </>
  )
}

export default User;