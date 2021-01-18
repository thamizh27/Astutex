import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import NavBar from "./NavBar";
import Footer from "./Footer";

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
    <>
      <NavBar />
      {loading ? (
        <Loading />
      ) : (
        <main className="item-main">
          {datas
            .filter((items) => items.programType === "series")
            .map((series, index) => (
              <div className="item-series" key={index}>
                <img
                  src={series.images["Poster Art"].url}
                  width="200px"
                  alt=" "
                />
                <p>{series.title}</p>
              </div>
            ))}
        </main>
      )}
      <Footer />
    </>
  );
};

export default Series;
