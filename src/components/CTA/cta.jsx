import React from "react";
import "./cta.css";

const Cta = () => {
  return (
    <div className="cta-container">
      <div className="cta-inner-div">
        <div className="cta-content">
          <span className="cta-header">
            Join the Fight Against <br />
            Hunger and Food Wastage!
          </span>
          <span className = "cta-mission">
            Be Part of our mission to combat hunger and reduce food wate through donations or
            volunteering. Your involvement will have a tangible impact on our community.
            Together, we can envision a future where hunger is eradicated and food waste becomes a thing of the past
            Take action by donating or volunteering.
          </span>
          <div className="cta-btns">
            <button className="cta-btn">Donate</button>
            <button className="cta-sec-btn">Volunteer</button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Cta;
