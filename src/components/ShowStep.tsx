import * as React from 'react';
import { BaseProps } from '../declare';
import Input from './ui/form/Input'
import cx from 'classnames';
import { CHARACTER_TABLE } from '../constants';

export interface State {};

export interface Props extends BaseProps {
  step: number;
  command: number;
};


export default class ShowStep extends React.Component<Props, State> {

  constructor() {
    super();
  }

  render() {
    const { step, command } = this.props;
    let step1;

    if(command) {
      step1 = (
          <span> Column {CHARACTER_TABLE[command - 1][0]} ({command}) </span>
      )
    }

    return (
        <div>
          <p>Current : Step {step}</p>
          <p>Step 1 : {step1} </p>
        </div>
      );
  }
}
