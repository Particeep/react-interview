import * as React from "react";

class Header extends React.Component {
  constructor(props: Object) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <h1>React Interview</h1>
      </div>
    );
  }
}

export default Header;
