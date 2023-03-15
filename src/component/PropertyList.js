import React from 'react'

const PropertyList = () => {
  return (
    <div className="propertyList">
      <div className="propertyItem">
        <img
          src="https://source.unsplash.com/500x500/?appartment&sig=1"
          className="propertyImg"
        />
        <div className="propertyTitle">
          <h1>Appartment</h1>
          <h2>550 appartment</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://source.unsplash.com/500x500/?resort&sig=1"
          className="propertyImg"
        />
        <div className="propertyTitle">
          <h1>Resort</h1>
          <h2>1,000 resort</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://source.unsplash.com/500x500/?villa&sig=1"
          className="propertyImg"
        />
        <div className="propertyTitle">
          <h1>Villas</h1>
          <h2>1,500 villa</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://source.unsplash.com/500x500/?cabin&sig=1"
          className="propertyImg"
        />
        <div className="propertyTitle">
          <h1>Cabin</h1>
          <h2>650 cabin</h2>
        </div>
      </div>
    </div>
  );
}

export default PropertyList