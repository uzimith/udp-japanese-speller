import * as React from 'react';
import { BaseProps } from '../../declare';
import cx from 'classnames';
import autobind from 'autobind-decorator'

export interface State {};

export interface Props extends BaseProps {
  label?: string;
  type: string;
  placeholder: string;
  textarea?: boolean;
  rows?: number;
  readOnly?: boolean;
  onEnter?: React.MouseEventHandler;
};

export default class Input extends React.Component<Props, State> {

  public static defaultProps = {
    textarea: false,
    readOnly: false
  };

  constructor() {
    super();
  }

  @autobind
  handleKeyPress(event) {
    const ENTER = 13;
    if(event.which === ENTER) {
      event.preventDefault();
      if(this.props.onEnter) this.props.onEnter();
    };
  }

  render() {
    const { label, type, placeholder, textarea, rows, readOnly } = this.props;
    return (
        <div className={cx("form-group", this.props.className)}>
          {label ? <label>{label}</label> : null}
          {textarea ? (
            <textarea className="form-control" rows={rows}>{this.props.children}</textarea>
          ) : (
            <input ref="node"
              type={type}
              className="form-control"
              placeholder={placeholder}
              value={this.props.children as string}
              readOnly={readOnly}
              onKeyPress={this.handleKeyPress}
            />
          )}
        </div>
      );
  }
}

