import * as React from 'react';
import { connect } from 'react-redux';
import CharacterTable from '../components/CharacterTable';
import { createSelector } from 'reselect';
import Pane from '../components/photon/Pane';
import Text from '../components/Text';

const inputSelector = state => state.input;

const select = createSelector(
  [inputSelector],
  input => {
    return { input }
  }
);

@connect(select)
export default class Sidebar extends React.Component<any, any> {
  render() {
    return (
          <Pane sidebar size="sm">
            <Text input={this.props.input} />
          </Pane>
        );
  }
}
