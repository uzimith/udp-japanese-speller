import * as React from 'react';
import cx from 'classnames';
import { BaseProps } from '../../declare';

export interface State {};

export interface Props extends BaseProps {};

export default class  extends React.Component<Props, State> {

  constructor() {
    super();
  }

  render() {
    return (
        <div className={cx("pane-group", this.props.className)}>
          {this.props.children}
        </div>
      );
  }
}

