import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs";

const Row = (props) => {
  const classNameForPunch = `inner-child-column punch-${props.punchType.toLowerCase()}`
  const formatStr = 'MM-DD-YYYY HH:mm:ss A';
  const dateVal = dayjs(props.dateValue);
  return (
    <div className="inner-child-row">
      <div className={classNameForPunch}>
        <div className="punch-text">{props.punchType}</div>
      </div>
      <div className="inner-child-column">
        <div className="punch-text">{dateVal.format(formatStr)}</div>
      </div>
    </div>
  );
}

const Header = (props) => {
  return(
    <div>
      <h1 align="center" className="punch-header">{props.title}</h1>
      <h2 align="center" className="punch-grid-header">
        {props.columns.map((val, key) => {
          const someKey = `header-${key}`;
          return <div key={someKey}>{val}</div>
        })}
      </h2>
    </div>
  )
}

class Base extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let newDate = Date.now();
    let columns = ["Type", "Time"];
    return (
      <div className="outer-container">
        <Header columns={columns} title="Punch App!" />
        <div className="container">
          <Row punchType="IN" dateValue={newDate} />         
        </div>
      </div>
    );
  }

  
}

ReactDOM.render(<Base/>, document.querySelector("#punch-app"));
