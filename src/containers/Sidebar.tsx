import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../actions/command';
import CharacterTable from '../components/CharacterTable';
import Pane from '../components/ui/Pane';
import SendCommand from '../components/SendCommand';
import Text from '../components/Text';
import ShowStep from '../components/ShowStep';

@connect( state => state.input, dispatch => bindActionCreators(actions, dispatch) )
export default class Sidebar extends React.Component<any, any> {
  render() {
    return (
          <Pane sidebar size="sm">
            <SendCommand onCommandEnter={this.props.receiveCommand} step={this.props.step} />
            <Text input={this.props.text} />
            <ShowStep step={this.props.step} />
            <p>{this.props.error}</p>
          </Pane>
        );
  }
}
