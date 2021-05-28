import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import './App.css';

import Movies from "./Movies/List";

function App(props: any) {

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link to="/movies/1">
            Movies
          </Link>
        </header>
        <main>
          <Route exact path="/">
            <h4>Hello! Please click on "Movies" menu item to start the demonstration.</h4>
          </Route>
          <Route path="/movies/:pageNumber">
            <Movies></Movies>
          </Route>
        </main>
      </Router>
    </div>
  );
}

export default App;
