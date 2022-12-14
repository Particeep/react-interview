import { NextUIProvider, createTheme } from "@nextui-org/react";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import { store } from "./stores";

const lightTheme = createTheme({
  type: "light",
});

function App() {
  return (
    <NextUIProvider theme={lightTheme}>
      <Provider store={store}>
        <Home />
      </Provider>
    </NextUIProvider>
  );
}

export default App;
