import * as React from 'react';
import { BaseProps } from '../../declare';
import cx from 'classnames';

export interface State {};

export interface Props extends BaseProps {};

export default class ButtonGroup extends React.Component<Props, State> {

  constructor() {
    super();
  }

  render() {
    return (
        <div className={cx("btn-control", this.props.className)}>
          {this.props.children}
        </div>
      );
  }
}

