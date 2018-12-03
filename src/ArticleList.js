import React from "react";
import Article from "./Article";

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    // 初期の状態
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    console.log("did mount");
    /* API叩く処理 */
    this.fetchQiitaArticles();
  }

  fetchQiitaArticles() {
    const baseUrl = "https://qiita.com/api/v2/";
    const action = "items";
    const url = `${baseUrl}${action}`;
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(articles => {
        this.setState({ articles });
      });
  }

  // ArticleListコンポーネントの出力
  render() {
    return (
      <div>
        <ul>
          {this.state.articles.map(item => (
            <Article id={item.id} title={item.title} url={item.url} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ArticleList;
