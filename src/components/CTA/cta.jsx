import React from "react";
import "./cta.css";
import lastland from '../shots/lastland.svg'

const Cta = () => {
  return (
    <div className="cta-container">
      <div className="cta-inner-div">
        <div className="cta-content">
          <p className="cta-header">
            Join the Fight Against <br />
            Hunger and Food Wastage!
          </p>
          <p className = "cta-mission">
              Be Part of our mission to combat hunger and reduce food wate through donations or
              volunteering. Your involvement will have a tangible impact on our community.
              Together, we can envision a future where hunger is eradicated and food waste becomes a thing of the past
              Take action by donating or volunteering.
          </p>
          <div className="cta-btns">
            <button className="cta-btn">Donate</button>
            <button className="cta-sec-btn">Volunteer</button>
          </div>
        </div>
        <img src={lastland} alt="the last pic on landing page" />
      </div>
    </div>
  );
};

export default Cta;
