/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";
import { Component } from "react";

// function App() {
//   const [render, setRender] = useState(true);
//   useEffect(() => {
//     setTimeout(() => {
//       setRender(!render);
//     }, 10000);
//   });
//   return <>{render ? <MyComponent /> : <>Oops</>}</>;
// }

function App() {
  return <MyComponent2 />;
}

function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("COmponent Mounted: When the component get into the picture");
    return () => {
      console.log(
        "Component Unmounter: When the dep array changes or component is replaced then this will run once and changes for the new one"
      );
    };
  }, []);

  return (
    <>
      {/* <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>+</button> */}
      inside from my Component
      {console.log("inside from my Component")}
    </>
  );
}

class MyComponent1 extends Component {
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

class MyComponent2 extends Component {
  componentDidMount() {
    console.log("Component Mounted");
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  render() {
    return <h1>Hi re</h1>;
  }
}

export default App;
