import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Loading from "./Loading";

const Series = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.entries);
        setDatas(data.entries);
        setLoading(false);
      });
  }, []);
  return (
    <div>
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
        <main className="item-main">
          {loading ? (
            <Loading />
          ) : (
            datas
              .filter((items) => items.programType === "movie")
              .map((series, index) => (
                <div className="item-series" key={index}>
                  <img
                    src={series.images["Poster Art"].url}
                    width="200px"
                    alt=" "
                  />
                  <p>{series.title}</p>
                </div>
              ))
          )}
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
    </div>
  );
};

export default Series;
