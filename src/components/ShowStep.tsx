import * as React from 'react';
import { BaseProps } from '../declare';
import Input from './ui/form/Input'
import cx from 'classnames';
import { CHARACTER_TABLE } from '../constants';

export interface State {};

export interface Props extends BaseProps {
  step: number[];
};


export default class ShowStep extends React.Component<Props, State> {

  constructor() {
    super();
  }

  render() {
    const { step } = this.props;
    let step1;

    if(step.length === 1) {
      step1 = (
          <span> Column {CHARACTER_TABLE[step[0] - 1][0]} ({step[0]}) </span>
      )
    }

    return (
        <div>
          <p>Current : Step {step.length + 1}</p>
          <p>Step 1 : {step1} </p>
        </div>
      );
  }
}
