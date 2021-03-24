import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import { Router} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import store from './redux/configureStore';
import history from "./history";

ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
  document.getElementById('root')
);

reportWebVitals();
