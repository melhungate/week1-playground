import React, { Component } from 'react';

//The below could be a stateless component. See FeaturedDonut.js
class Button extends Component {
  handleClick() {
    alert('Tee-hee that tickles!');
  }
  render() {
    return (
      <button onClick={this.handleClick}>Click me</button>
    )
  }
}

export default Button;