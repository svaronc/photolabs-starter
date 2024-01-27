import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ data, id, onSetTopic }) => {
  const { title } = data;
  return (
    <div className="topic-list__item">
      <span onClick={() => onSetTopic(id)}>{title}</span>
    </div>
  );
};

export default TopicListItem;
