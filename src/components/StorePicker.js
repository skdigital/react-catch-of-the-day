import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '.././helpers';

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };

  form = React.createRef();

  goToStore = event => {
    event.preventDefault();
    console.log(this.form.current.value);
    const storeName = this.form.current.value;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.form}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;
