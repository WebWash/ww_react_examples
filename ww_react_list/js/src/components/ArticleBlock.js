import React from "react";
import Article from "./Article";

/**
 * Lists out articles.
 */
class ArticleBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      articleData: null,
    };
    this.handleReturnClick = this.handleReturnClick.bind(this)
  }

  /**
   * Load articles via Drupal JSON:API.
   */
  componentDidMount() {
    fetch('/jsonapi/node/article?sort=-created&page[limit]=3')
      .then(response => response.json())
      .then(data => this.setState({ data: data.data }));
  }

  /**
   * Add article data to state when clicking on an article link.
   *
   * @param article
   * @param e
   */
  handleClick(article, e) {
    e.preventDefault();
    this.setState({
      articleData : article
    });
  }

  /**
   * Returns article data from state and displays list.
   * @param e
   */
  handleReturnClick(e) {
    e.preventDefault();
    this.setState({
      articleData : null
    });
  }

  render() {

    const { data, articleData } = this.state;

    if (!data) {
      return <p>Loading ...</p>;
    }

    // Display actual article.
    if (articleData) {
      return <Article article={articleData} returnClick={this.handleReturnClick} />;
    }

    // Display list of articles.
    return (
      <div>
        <ul>
          {data.map(article =>
            <li key={article.id}>
              <a href="#" onClick={this.handleClick.bind(this, article)}>{article.attributes.title}</a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ArticleBlock;
