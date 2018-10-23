import React from "react";
import ReactDOM from "react-dom";

const Row = (props) => {
  const classNameForPunch = `inner-child-column punch-${props.punchType.toLowerCase()}`
  console.dir(classNameForPunch); // eslint-disable-line
  return (
    <div className="inner-child-row">
      <div className={classNameForPunch}>
        <div className="punch-text">{props.punchType}</div>
      </div>
      <div className="inner-child-column">
        <div className="punch-text">{props.dateValue}</div>
      </div>
    </div>
  );
}

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
          <Row punchType="IN" dateValue="Four" />         
          <Row punchType="OUT" dateValue="Four" />         
          <Row punchType="IN" dateValue="Four" />         
          <Row punchType="BREAK" dateValue="Four" />         
          <Row punchType="IN" dateValue="Four" />
        </div>
      </div>
    );
  }

  
}

ReactDOM.render(<Base/>, document.querySelector("#punch-app"));
