import * as React from 'react';
import Main from './Main';
import Sidebar from './Sidebar';
import PaneGroup from '../components/photon/PaneGroup';

export default class App extends React.Component<any, any> {
  render() {
    return (
        <PaneGroup>
          <Sidebar />
          <Main />
        </PaneGroup>
        );
  }
}
