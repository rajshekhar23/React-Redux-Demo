import {render} from 'react-dom';
import React from 'react';
import App from './app/components/App';
import {Provider} from 'react-redux';
import store from './app/store';

render(
    <Provider store={store}>
    <App/>
</Provider>, window.document.getElementById('root'))