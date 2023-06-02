import React from "react";

const Card = ({val}) => {
  return (
    <>
      <div className="card w-[18rem] rounded-lg shadow-lg relative">
        <div className="image">
          <img
            src={val.show.image.medium}
            alt={val.show.name}
            className="w-full object-contain rounded-t-lg"
          />
        </div>
        <div className="content p-4">
          <h1 className="text-xl font-medium">{val.show.name}</h1>
          {/* <p className="text-[15px] text-slate-300 mt-2">
                      {val.show.summary.slice(3, 90)}...
                    </p> */}
          <div className="flex justify-between mt-2">
            <span className=" text-sm text-slate-300">
              {val.show.rating.average}
            </span>
            <p className="flex justify-end gap-1">
              {val.show.genres.map((e, i) => (
                <span
                  key={i}
                  className="text-xs bg-slate-700 px-1 py-0.5 rounded-md"
                >
                  {e}
                </span>
              ))}
            </p>
          </div>
          <p className="text-xs flex justify-start items-end text-slate-300 gap-2 mt-2">
            <span className="text-sm font-medium">Premiered</span>
            {val.show.premiered}
          </p>
          <a href={val.show.url} className="text-slate-100">
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
