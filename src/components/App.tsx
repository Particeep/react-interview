import * as React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

library.add(faThumbsDown, faThumbsUp);

class App extends React.Component {
  constructor(props: Object) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <MainContent />
      </div>
    );
  }
}

export default App;
