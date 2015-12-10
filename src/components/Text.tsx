import * as React from 'react';
import Input from './ui/form/Input'

export interface State {};

export interface Props {
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
