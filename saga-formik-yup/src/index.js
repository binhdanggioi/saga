import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import store from './redux/configureStore';
import './i18n';

ReactDOM.render(
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
            <App />
        </Provider>
        </Suspense>
    </Router>,
  document.getElementById('root')
);

reportWebVitals();
