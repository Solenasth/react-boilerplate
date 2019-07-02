import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>this is a react app!!</h1>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
