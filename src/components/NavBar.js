import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="nav-div">
          <NavLink to="/" exact>
            <h1>DEMO Streaming</h1>
          </NavLink>
          <div className="nav-button">
            <p>Log in</p>
            <p>Start your free trial</p>
          </div>
        </div>
      </nav>
      <div className="title-div">
        <div className="title-header">
          <p>Popular Titles</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
