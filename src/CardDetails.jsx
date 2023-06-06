import React from "react";

const CardDetails = ({ val }) => {
  return (
    <>
      <div className=" p-8 w-full">
        <div className="flex gap-4">
          <img
            src={val.show.image.medium}
            alt="show"
            className=" object-contain "
          />
          <div>
            <h1>{val.show.name}</h1>
            <p className="mt-10">{val.show.summary}</p>
          </div>
        </div>
        <p>{val.show.premiered}</p>
      </div>
    </>
  );
};

export default CardDetails;
