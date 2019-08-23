import React from "react";
import Article from "./Article";

class ArticleBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      displayArticle: null,
    };
  }

  componentDidMount() {
    fetch('/jsonapi/node/article')
      .then(response => response.json())
      .then(data => this.setState({ data: data.data }));
  }

  handleClick(article, e) {
    e.preventDefault();
    this.setState({
      displayArticle : article
    });
  }

  handleReturnClick(e) {
    e.preventDefault();
    console.log(e);
    this.setState({
      displayArticle : null
    });
  }

  render() {

    const { data, displayArticle } = this.state;

    if (!data) {
      return <p>Loading ...</p>;
    }

    // Display actual article.
    if (displayArticle) {
      return <Article article={displayArticle} returnClick={this.handleReturnClick.bind(this)} />;
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
