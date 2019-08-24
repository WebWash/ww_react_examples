import React from "react";

/**
 * Displays an article's title, created and body field.
 *
 * @param article
 * @param returnClick
 * @returns {*}
 * @constructor
 */
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
