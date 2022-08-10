import React, { Component } from "react";
import Header from "./Header";
import Movies from "./Movies";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Movies />
      </div>
    );
  }
}
export default App;
