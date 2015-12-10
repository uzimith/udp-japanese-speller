import * as React from 'react';
import cx from 'classnames';
import { BaseProps } from '../../declare';

export interface State {};

export interface Props extends BaseProps {
  size?: string; // sm | mini | one-fourth | one-third
  sidebar?: boolean;
};

export default class Pane extends React.Component<Props, State> {

  public static defaultProps = {
    sidebar: false
  };

  constructor() {
    super();
  }

  render() {
    const { size, sidebar } = this.props;
    return (
        <div className={cx(`pane ${ size ? "pane-" + size : "" } ${ sidebar ? "sidebar" : "" }`, this.props.className)}>
          {this.props.children}
        </div>
      );
  }
}

