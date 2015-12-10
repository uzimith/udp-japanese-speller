import * as React from 'react';
import CharacterBox from './CharacterBox';
import { Character, BaseProps } from '../declare';

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
        <div>
          {this.props.table.map((character) => <CharacterBox {...character} key={character.cid} />)}
        </div>
      );
  }
}
