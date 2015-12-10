import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import configureStore from './stores/configureStore';

// const ipcRenderer = require('electron').ipcRenderer;
//
// ipcRenderer.on('receive-command', (event, arg) => {
//   console.log(arg.toString('ascii', 0, arg.size));
// });

const store = configureStore();

let debug;
if (process.env.NODE_ENV !== 'production') {
  debug = (
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  );
}

ReactDOM.render(
        <div>
          <Provider store={store}>
              <App />
          </Provider>
          {debug}
        </div>,
        document.getElementById('root')
        );
