import React from "react";

const Article = ({ article, returnClick }) => {
  const { attributes } = article;
  return (
    <div>
      <h3>{attributes.title}</h3>
      <span>{attributes.created}</span>
      <div dangerouslySetInnerHTML={{__html: attributes.body.processed}} />
      <hr />
      <a href="#" onClick={returnClick}>&lt; Back to list</a>
    </div>
  );
};

export default Article;
