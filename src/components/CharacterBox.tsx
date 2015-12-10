import * as React from 'react';
import Button from './photon/Button';
import { Character, BaseProps } from '../declare';

export interface State {};

export interface Props extends Character, BaseProps {};

export default class CharacterBox extends React.Component<Props, State> {

  constructor() {
    super();
  }

  render() {
    const { cid, showing, enabled } = this.props;
    return (
        <Button className="u-m12" status={enabled ? "negative" : "default"}>
          {showing}
        </Button>
      );
  }
}
