import React from "react";
import { render } from "react-dom";
import Demo from "./containers/Demo.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Demo />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
