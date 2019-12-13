import React from 'react';
import PropTypes from 'prop-types';

export default class InputField extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func
  }

  render() {
    const { id, label, value } = this.props;
    return (
      <div className="field input">
        <input
          id={id}
          type="text"
          value={value}
          placeholder={label}
          onChange={this.props.onChange}
        />
      </div>
    )
  }
} 