import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Counter from "./components/Counter";

import reducers from "./reducers";

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div>
          <Counter />
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
