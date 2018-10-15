import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddFishForm extends Component {
  static propTypes = {
    addFish: PropTypes.func
  };

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    event.preventDefault();
    const fish = {
      nameRef: this.nameRef.current.value,
      priceRef: parseFloat(this.priceRef.current.value),
      statusRef: this.statusRef.current.value,
      descRef: this.descRef.current.value,
      imageRef: this.imageRef.current.value
    };
    console.table(fish);
    this.props.addFish(fish);
    // reset form after fish added to state
    event.currentTarget.reset();
  };

  render() {
    return (
      <div>
        <form className="fish-edit" onSubmit={this.createFish}>
          <input
            ref={this.nameRef}
            name="name"
            type="text"
            placeholder="Name"
          />
          <input
            ref={this.priceRef}
            name="price"
            type="text"
            placeholder="Price"
          />
          <select ref={this.statusRef} name="status">
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <textarea ref={this.descRef} name="desc" placeholder="Desc" />
          <input
            ref={this.imageRef}
            name="image"
            type="text"
            placeholder="Image"
          />
          <button type="submit">+ Add Fish</button>
        </form>
      </div>
    );
  }
}
