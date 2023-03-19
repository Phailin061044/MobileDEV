import React from 'react'

const FeaturedProperties = () => {
  return (
    <div className="FeaturedProperties">
      <div className="FeaturedPropertiesItem">
        <img
          src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          className="FeaturedPropertiesImg"
        />
        <div className="FeaturedPropertiesTitle">
          <h1>Aparthotel Stare Miasto</h1>
          <h3>Madrid</h3>
          <h2>Starting from $120</h2>
          <div className="fpRating">
            <button>8.8</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
      <div className="FeaturedPropertiesItem">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          className="FeaturedPropertiesImg"
        />
        <div className="FeaturedPropertiesTitle">
          <h1>Comfort Suites Airport</h1>
          <h3>Austin</h3>
          <h2>Starting from $120</h2>
          <div className="fpRating">
            <button>9.3</button>
            <span>Exceptional</span>
          </div>
        </div>
      </div>
      <div className="FeaturedPropertiesItem">
        <img
          src="https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          className="FeaturedPropertiesImg"
        />
        <div className="FeaturedPropertiesTitle">
          <h1>Four Seasons Hotel</h1>
          <h3>Lisbon</h3>
          <h2>Starting from $99</h2>
          <div className="fpRating">
            <button>8.8</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
      <div className="FeaturedPropertiesItem">
        <img
          src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          className="FeaturedPropertiesImg"
        />
        <div className="FeaturedPropertiesTitle">
          <h1>Hilton Garden lnn</h1>
          <h3>Berlin</h3>
          <h2>Starting from $105</h2>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProperties

