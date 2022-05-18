import { NavLink, Link, useLocation } from "react-router-dom";

function Header({user}) {
  let pathname = useLocation().pathname

  return(
    <div className="Header">
      <Link to="/">
        <h1>CatTube</h1>
      </Link>
      {user ? (
        <div className="user">
          <NavLink to="/userpage">
            <p>{user}</p>
          </NavLink>
        </div>
      ) : (
        (() => {
          switch (pathname) {
            case "/login":
              return (
                <div className="user">
                  <NavLink to="/signup">
                    <p>Signup</p>
                  </NavLink>
                </div>
              )
            case "/signup":
              return (
                <div className="user">
                  <NavLink to="/login">
                    <p>Login</p>
                  </NavLink>
                </div>
              )
            default:
              return (
                <div className="user">
                  <NavLink to="/login">
                    <p>Login</p>
                  </NavLink>
                  <p>/</p>
                  <NavLink to="/signup">
                    <p>Signup</p>
                  </NavLink>
                </div>
              )
          }
        })()
      )}
    </div>
  )
}

export default Header;