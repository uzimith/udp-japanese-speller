import * as React from 'react';
import cx from 'classnames';
import { BaseProps } from '../../declare';

export interface State {};

export interface Props extends BaseProps {};

export default class Bar extends React.Component<Props, State> {

  constructor() {
    super();
  }

  render() {
    return (
        <span className={cx(this.props.className)}>
        </span>
      );
  }
}
