import React from "react";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://source.unsplash.com/500x500/?switzerland&sig=1"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Switzerland</h1>
          <h2>2,500 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://source.unsplash.com/500x500/?korea&sig=1"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Korea</h1>
          <h2>2,000 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://source.unsplash.com/500x500/?unitedStatesofAmerica&sig=1"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>United States of America</h1>
          <h2>1,500 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://source.unsplash.com/500x500/?newzealand&sig=1"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Newzealand</h1>
          <h2>1,500 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
