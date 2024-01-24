import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({data}) => {
  const {id, slug , title} = data
  return (
    <div className="topic-list__item">
      <span key={id}>{title}</span>
    </div>
  );
};

export default TopicListItem;
