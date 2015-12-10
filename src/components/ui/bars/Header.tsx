import * as React from 'react';
import { BaseProps } from '../declare';
import cx from 'classnames';

export interface State {};

export interface Props extends BaseProps {
  title: string;
};

export default class Header extends React.Component<Props, State> {

  constructor() {
    super();
  }

  render() {
    return (
        <header className={cx(this.constructor.name, this.props.className, "toolbar toolbar-header")}>
          <h1 className="title">{this.props.title}</h1>

          {this.props.children ? (
            <div className="toolbar-actions">
              {this.props.children}
            </div>
          ) : null}
        </header>
      );
  }
}
