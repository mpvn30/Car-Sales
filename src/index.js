import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducers/index";

import 'bulma/css/bulma.css';
import './styles.scss';

const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, rootElement
);
