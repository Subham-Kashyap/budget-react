import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import storeConfig from './store/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = storeConfig;
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

