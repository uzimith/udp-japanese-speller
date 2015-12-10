import * as React from 'react';
import CharacterBox from './CharacterBox';
import { Character, BaseProps } from '../declare';
import cx from 'classnames';

export interface State {};

export interface Props extends BaseProps {
  table: Character[];
};

export default class CharacterTable extends React.Component<Props, State> {

  constructor() {
    super();
  }

  render() {
    return (
        <div className={cx(this.constructor.name, this.props.className, "grid-5-10 u-m10")} >
          {this.props.table.map((character) => <CharacterBox className=`box-${character.row}-${9 - character.column}` {...character} key={character.cid} />)}
        </div>
      );
  }
}
