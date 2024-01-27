import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, onSetTopic }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((item) => (
        <TopicListItem
          key={item.id}
          data={item}
          id={item.id}
          onSetTopic={onSetTopic}
        />
      ))}
    </div>
  );
};

export default TopicList;
