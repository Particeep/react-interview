import "react-toastify/dist/ReactToastify.css"; // Notification styles
import "./styles/app.scss"; // Styles

import React from "react";

// Components
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Body />
      <Footer />
    </>
  );
}

export default App;
