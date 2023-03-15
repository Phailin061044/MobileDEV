import React from "react";

const MailList = () => {
  return (
    <div className="mlContainer">
      <h1>Save time, save money!</h1>
      <h3>Sing up and we'll send the best deals to you</h3>
      <div className="inputEmail">
        <input
        type="email"
        placeholder="  Your email"
        />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
