import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-secondary btn-lg m-2"
        >
          Reset
        </button>
        <button
          onClick={this.props.onAddCounter}
          className="btn btn-dark btn-md m-2"
        >
          Add Counter
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onAddCounter={this.props.onAddCounter}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
