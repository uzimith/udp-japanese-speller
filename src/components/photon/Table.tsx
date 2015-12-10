import * as React from 'react';
import cx from 'classnames';
import { BaseProps } from '../../declare';

export interface State {};

export interface Props extends BaseProps {};

export default class Table extends React.Component<Props, State> {

  constructor() {
    super();
  }

  render() {
    return (
        <table className={cx("table-striped", this.props.className)}>
          {this.props.children}
        </table>
      );
  }
}
