import React from "react";
import ReactDOM from "react-dom";

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Punch App!",
      headers: [
        "Type",
        "Time"
      ]
    }
  }
  render() {
    return (
      <div class="outer-container">
        <h1 align="center" class="punch-header">{this.state.title}</h1>
        <h2 align="center" class="punch-grid-header">
          <div>{this.state.headers[0]}</div>
          <div>{this.state.headers[1]}</div>
        </h2>
        <div class="container">
          <div class="inner-child-row">
            <div class="inner-child-column">IN</div>
            <div class="inner-child-column">Three</div>
          </div>
          <div class="inner-child-row">Two</div>
          <div class="inner-child-row">Three</div>
          <div class="inner-child-row">Four</div>
          <div class="inner-child-row">Five</div>
          <div class="inner-child-row">Six</div>
        </div>
      </div>
      
    );
  }
}

ReactDOM.render(<Base/>, document.querySelector("#punch-app"));
