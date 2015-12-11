import * as React from 'react';
import { connect } from 'react-redux';
import CharacterTable from '../components/CharacterTable';
import { createSelector } from 'reselect';
import Pane from '../components/ui/Pane';
import Header from '../components/ui/bars/Header';

@connect(state => state)
export default class Main extends React.Component<any, any> {
  render() {
    return (
        <Pane>
          <Header title="Target" />
          <CharacterTable table={this.props.table} />
        </Pane>
        );
  }
}
