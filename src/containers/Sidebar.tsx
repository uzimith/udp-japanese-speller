import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import * as CommandActions from '../actions/command';
import CharacterTable from '../components/CharacterTable';
import Pane from '../components/ui/Pane';
import SendCommand from '../components/SendCommand';
import Text from '../components/Text';

const inputSelector = state => state.input;

const select = createSelector(
  [inputSelector],
  input => {
    return { input }
  }
);

function bind(dispatch) {
  return bindActionCreators(CommandActions, dispatch);
};

@connect(select, bind)
export default class Sidebar extends React.Component<any, any> {
  render() {
    return (
          <Pane sidebar size="sm">
            <SendCommand onCommandEnter={this.props.receiveCommand} />
            <Text input={this.props.input} />
          </Pane>
        );
  }
}
