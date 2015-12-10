import * as React from 'react';
import { connect } from 'react-redux';
import CharacterTable from '../components/CharacterTable';
import { createSelector } from 'reselect';
import Pane from '../components/photon/Pane';

const tableSelector = state => state.table;

const select = createSelector(
  [tableSelector],
  table => {
    return { table }
  }
);

@connect(select)
export default class Main extends React.Component<any, any> {
  render() {
    return (
        <Pane>
          <CharacterTable table={this.props.table} />
        </Pane>
        );
  }
}
