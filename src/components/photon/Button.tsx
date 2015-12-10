import * as React from 'react';
import { BaseProps } from '../../declare';
import cx from 'classnames';

export interface State {};

export interface Props extends BaseProps {
  status?: string; // default | primary | positive | negative | warning
  size?: string;
};

export default class Button extends React.Component<Props, State> {

  constructor() {
    super();
  }

  render() {
    const { size, status } = this.props;
    return (
        <button className={cx(`btn ${size ? "btn-" + size : ""} btn-${status}`, this.props.className)}>
          {this.props.children}
        </button>
      );
  }
}
