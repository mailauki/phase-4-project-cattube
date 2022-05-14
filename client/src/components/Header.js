import { NavLink } from "react-router-dom";

function Header() {
  return(
    <div className="Header">
      <NavLink to="/videos"><h1>CatTube</h1></NavLink>
      <NavLink to="/testing"><p>Username</p></NavLink>
    </div>
  )
}

export default Header;