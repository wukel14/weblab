import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import Card from "../modules/Card.js";
import { NewStory } from "../modules/NewPostInput.js";

import "./FeedPage.css";

const FeedPage = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    get("/api/stories").then((storyObjs) => {
      setStories(storyObjs);
    });
  }, []);

  const addNewStory = (storyObj) => {
    setStories(stories.concat([storyObj]));
  };
  let storiesList = null;
  const hasStories = stories.length !== 0;
  if (hasStories) {
    storiesList = stories.map((storyObj) => (
      <Card
        key={`Card_${storyObj._id}`}
        _id={storyObj._id}
        creator_name={storyObj.creator_name}
        content={storyObj.content}
      />
    ));
  } else {
    storiesList = <div> No answers have been posted.</div>;
  }

  return (
    <div>
      <h1 className="Feed-header"> What will America Become: A Political Debate</h1>
      <h2 className="Feed-subheader">
        {" "}
        With the 2024 presidential elections this November, what are your opinions on the future of
        the United States?{" "}
      </h2>
      <NewStory addNewStory={addNewStory} />
      {storiesList}
    </div>
  );
};

export default FeedPage;
