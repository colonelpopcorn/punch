import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs";
import axios from "axios";

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
      <div className="input-container">
        <label for="date-start">Start Date:</label>
        <input type="date" id="date-start" clas="datepicker"></input>
        <label for="date-end">End Date:</label>
        <input type="date" id="date-end" clas="datepicker"></input>
      </div>
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
    this.state = {
      punches: []      
    }
  }

  componentDidMount() {
    axios({
      url: "/api/punches",
      params: {
        start: Math.floor(new Date() / 1000),
        end: Date.now()
      }
    })
    .then(function(res) {
      this.setState({punches: res.data})
    }.bind(this))
    .catch(function() {
      //this.setState({punches: []});
    }.bind(this));
  }

  render() {
    let columns = ["Type", "Time"];
    let punches = this.state.punches;
    let rows = [];
    if (punches && punches.map) {
      rows = this.state.punches.map((val, key) => {
        const dateVal = new Date(val.punch_time);
        return <Row punchType={val.type} dateValue={dateVal} />
      });
    } else {
      rows = <p className="loadmask">Loading...</p>
    }
    return (
      <div className="outer-container">
        
        <Header columns={columns} title="Punch App!" />
         
        <div className="container">
          {rows}         
        </div>
      </div>
    );
  }

  
}

ReactDOM.render(<Base/>, document.querySelector("#punch-app"));
