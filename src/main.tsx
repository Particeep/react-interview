//React libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

//Components
import App from './App';

//Store
import { store } from './store';

//Styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <App />
    </Provider>
)
