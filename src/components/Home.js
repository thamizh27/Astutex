import NavBar from "./NavBar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
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
      <Footer />
    </>
  );
};

export default Home;
