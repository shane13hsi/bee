import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const { counter } = this.props;
    const { increment, incrementIfOdd, incrementAsync, decrement } = this.props.actions;

    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
      </p>
    );
  }
}

export default Counter;
