import React from "react";

const Card = ({ val }) => {
  const handleChange = () => {
    console.log(val.show.name);
    console.log({ ...val });
  };

  return (
    <>
      <div className="card w-[18rem] rounded-lg shadow-lg">
        <div className="image">
          <>
            <img
              src={val.show.image.medium}
              alt={val.show.name}
              onClick={handleChange}
              className="w-full rounded-t-lg hover:scale-90 transition cursor-pointer"
            />
          </>
        </div>
        <div className="content p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl text-white font-mono">{val.show.name}</h1>
            <span className=" text-sm text-slate-300">
              {val.show.rating.average}
              {"  "}
              {val.show.rating.average ? <span>&#9733;</span> : null}
            </span>
          </div>
          <p className="flex justify-start gap-1 mt-2">
            {val.show.genres.map((e, i) => (
              <span
                key={i}
                className="text-xs bg-slate-700 px-1 py-0.5 rounded-md"
              >
                {e}
              </span>
            ))}
          </p>
          <p className="text-xs flex items-center text-slate-300 gap-2 mt-2">
            <span className="text-white font-medium">Premiered</span>
            {val.show.premiered}
          </p>
          <a href={val.show.url} target="_blank" className="text-slate-100">
            <button
              type="button"
              className="bg-blue-500 px-4 py-2 font-medium rounded-md mt-4"
            >
              Read more
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
