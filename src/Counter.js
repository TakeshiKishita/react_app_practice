import React from "react";

import "./Counter.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    // 初期の状態
    this.state = {
      count: 1,
      color: "black"
    };

    // handleIncrement()をbind
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  componentDidMount() {
    console.log("did mount");
    /* API叩く処理 */
  }

  // カウントを増やす関数
  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  // カウントを減らす関数
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // ボタンの色を変える関数
  handleChangeColor = e => {
    const color = e.currentTarget.value;
    this.setState({ color: color }); // ({ color })
  };

  // Counterコンポーネントの出力
  render() {
    return (
      <div className="counterWrapper">
        <p>Counter Component</p>
        <p style={{ color: this.state.color }}>count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment!</button>
        <button onClick={this.handleDecrement}>Decrement!</button>
        <br />
        <br />
        　<span>Button Color: </span>
        <input value={this.state.color} onChange={this.handleChangeColor} />
      </div>
    );
  }
}

export default Counter;
