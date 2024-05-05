/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { Component } from "react";

function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

// function MyComponent() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={() => setCount((count) => count + 1)}>+</button>
//     </>
//   );
// }

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>+</button>
      </>
    );
  }
}

export default App;
