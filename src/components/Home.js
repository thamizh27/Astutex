import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
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
      <main className="main">
        <NavLink to="/series">
          <div className="series-div">
            <div className="series">
              <p>SERIES</p>
            </div>
            <p className="popular">Popular Series</p>
          </div>
        </NavLink>
        <NavLink to="/movies">
          <div className="movies-div">
            <div className="movies">
              <p>MOVIES</p>
            </div>
            <p className="popular">Popular Movies</p>
          </div>
        </NavLink>
      </main>
      <footer>
        <div className="footer-div">
          <ul>
            <li>Home |</li>
            <li>Terms and Conditions |</li>
            <li>Privacy Policy |</li>
            <li>Collection Statement |</li>
            <li>Help |</li>
            <li>Manage Account</li>
          </ul>
          <p>Copyrigth &copy; 2021 DEMO Streaming. All Rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
