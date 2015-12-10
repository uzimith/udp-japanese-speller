import * as React from 'react';
import { BaseProps } from '../declare';
import Input from './ui/form/Input'
import cx from 'classnames';

export interface State {};

export interface Props extends BaseProps {
  input: string;
};

export default class CharacterBox extends React.Component<Props, State> {

  constructor() {
    super();
  }

  render() {
    return (
        <Input className="u-m20" label="Input" type="text" readOnly placeholder="入力">
          {this.props.input}
        </Input>
      );
  }
}
