import React, { Component } from "react";
import NavBar from "./components/navBar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    if (counters[index].value < 0) {
      counters[index].value = 0;
    }
    this.setState({ counters });
  };

  handleAddCounter = () => {
    var length = this.state.counters.length;
    var addCounter = [{ id: length + 1, value: 0 }];
    var counters = [...this.state.counters];
    counters = counters.concat(addCounter);
    this.setState({ counters });
    console.log("Added counter number " + (length + 1));
  };

  handleReset = () => {
    const counters = [...this.state.counters];
    counters.forEach(function(counter) {
      counter.value = 0;
    });

    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onAddCounter={this.handleAddCounter}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
