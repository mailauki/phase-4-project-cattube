import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import FollowBtn from "../components/FollowBtn";
import Errors from "../components/Errors";

function User({user, currentUser, pathname}) {
  const [errors, setErrors] = useState([])
  const history = useHistory()
  
  function handleLogout() {
    console.log("logout")
    fetch("/logout", {
      method: "DELETE"
    })
      .then((r) => {
        if(r.ok) {
          // setUser(null)
          history.push("/")
        }
      })
  }

  return(
    <>
      <div className="creator">
        {user ? (
          <>
            <Link to={`/users/${user.id}`}>
              <p style={{fontWeight: 600}}>{user.username}</p>
            </Link>
            <p>{user.followers_total} followers</p>
            <p>{user.videos_total} videos</p>
            {pathname === "/users/me" ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <FollowBtn currentUser={currentUser} user={user} onError={setErrors} />
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