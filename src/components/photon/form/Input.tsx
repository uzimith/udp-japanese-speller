import * as React from 'react';
import { BaseProps } from '../../declare';
import cx from 'classnames';

export interface State {};

export interface Props extends BaseProps {
  label?: string;
  type: string;
  placeholder: string;
  textarea?: boolean;
  rows?: number;
  readOnly?: boolean;
};

export default class Input extends React.Component<Props, State> {

  public static defaultProps = {
    textarea: false,
    readOnly: false
  };

  constructor() {
    super();
  }

  render() {
    const { label, type, placeholder, textarea, rows, readOnly } = this.props;
    return (
        <div className={cx("form-group", this.props.className)}>
          {label ? <label>Password</label> : null}
          {textarea ? (
            <textarea className="form-control" rows={rows}>{this.props.children}</textarea>
          ) : (
            <input type={type} className="form-control" placeholder={placeholder} value={this.props.children as string} readOnly={readOnly} />
          )}
        </div>
      );
  }
}

