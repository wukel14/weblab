import React from "react";
import "./ImageColumn.css";

const ImageColumn = () => {
  return (
    <div className="image-column">
      <div className="image-container">
        <a
          href="https://www.270towin.com/maps/consensus-2024-presidential-election-forecast"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.270towin.com/map-images/consensus-2024-presidential-election-forecast.png"
            alt="Consensus 2024 Presidential Election Forecast"
            width="800"
          />
        </a>
      </div>
      <p className="image-description">
        To gain a bit of background to approach this week's debate topic, we have this map that
        allows us to visualize the changes of electoral votes throughout the years. 270 electoral
        votes wins the 2024 presidential election. Hence, this map is useful to locate the possible
        key swing states that presidents will target and possibly be major players in the election
        in this coming November.
        <br />
      </p>
      <p className="additional-description">
        If you want to check out the interactive map, click the url below!
        <br />
        <a
          href="https://www.270towin.com/maps/consensus-2024-presidential-election-forecast"
          target="_blank"
          rel="noopener noreferrer"
        >
          2024 Consensus Electoral Map
        </a>
      </p>{" "}
    </div>
  );
};

export default ImageColumn;
