import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    const getData = async () => {
      const url = "https://api.tvmaze.com/search/shows?q=all";
      try {
        const res = await fetch(url);
        const data = await res.json();
        setApiData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="app">
        <h1 className="text-center text-[55px] leading-[70px] p-2 font-semibold text-[#49b9ad] bg-[#1119288c] mb-4">
          TvMaze
        </h1>

        <div className="max-w-[1280px] flex flex-wrap justify-center gap-8 mt-10 p-4 mx-auto">
          {apiData &&
            apiData.map((val, i) => {
              return <Card key={i} val={val} />;
            })}
        </div>
      </div>
    </>
  );
}

export default App;
