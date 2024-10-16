import React, { Component } from 'react'

type MyProps = {};
type MyState = { count: number};

export class CounterClassComponent extends Component<MyProps, MyState> {

    constructor(props: MyProps){
        super(props);
        this.state = {count: 0};
    }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => {
            let count = this.state.count;
            this.setState({count: count + 1})
        }}>Increment</button>
      </div>
    )
  }
}

export default CounterClassComponent