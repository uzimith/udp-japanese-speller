import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './stores/configureStore';
// const ipcRenderer = require('electron').ipcRenderer;
//
// ipcRenderer.on('receive-command', (event, arg) => {
//   console.log(arg.toString('ascii', 0, arg.size));
// });

const store = configureStore();

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
        );
