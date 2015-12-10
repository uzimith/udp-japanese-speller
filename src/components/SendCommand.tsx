import * as React from 'react';
import { BaseProps } from '../declare';
import Input from './ui/form/Input'
import autobind from 'autobind-decorator'
import cx from 'classnames';

export interface State {};

export interface Props extends BaseProps {
  onCommandEnter(): void;
};


export default class SendCommand extends React.Component<Props, State> {

  constructor() {
    super();
  }

  @autobind
  handleEnter() {
    console.log(this.props.onCommandEnter(this.refs.input.refs.node.value));
    this.refs.input.refs.node.value = "";
  }

  render() {
    return (
        <Input ref="input" className="u-m20" label="Command" type="text" placeholder="コマンド" onEnter={this.handleEnter} />
      );
  }
}
