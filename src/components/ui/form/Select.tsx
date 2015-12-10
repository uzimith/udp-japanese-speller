import * as React from 'react';
import cx from 'classnames';
import { BaseProps } from '../../declare';

export interface State {};

export interface Props extends BaseProps {};

export default class Select extends React.Component<Props, State> {

  constructor() {
    super();
  }

  render() {
    return (
        <select className={cx("form-control", this.props.className)}>
          {this.props.children}
        </select>
      );
  }
}

