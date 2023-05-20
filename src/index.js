import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { store } from './app/redux/store/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  
    <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
  , document.getElementById('root')
);

serviceWorker.unregister();
