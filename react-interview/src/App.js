import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './reducers'
import './App.css';

import 'ui-neumorphism/dist/index.css'

import './styles/neumorphism.css'

import Home from './pages/Home';
import Nav from './components/Nav';

function App() {

  
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>

  );
}

export default App;
