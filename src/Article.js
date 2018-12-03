import React from "react";

class HelloWorld extends React.Component {
  render() {
    const { id, url, title } = this.props;
    return (
      <>
        <li>
          <a href={url}>{title}</a>
        </li>
        <li>
          <p>{id}</p>
        </li>
      </>
    );
  }
}

export default HelloWorld;
