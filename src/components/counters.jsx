import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {

    const { counters, onIncrement, onDecrement, onDelete, onReset, onAdding, onClear } = this.props;

    return (
      <React.Fragment>
        <div>
          {counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            ></Counter>
          ))}
        </div>
        <button
          onClick={onAdding}
          className="btn btn-success btn-la m-2"
        >Add</button>
        <button
          onClick={onReset}
          className="btn btn-warning btn-la m-2"
        >
          Reset
        </button>
        <button
          onClick={onClear}
          className="btn btn-danger btn-la m-2">Clear</button>
        <form>
          <div className="form-row">
            <div className="col-xs-2 m-2">
              <input type="text" className="form-control" placeholder="First name"></input>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Counters;
