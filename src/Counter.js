import React, { Component } from 'react'

class Counter extends Component {
	constructor() {
	    super()
	    this.state = {
	      count: 0
	    }
	}
	
	handleClick = () => {
		const newCount = this.state.count + 1;
		this.setState({
			count: newCount
		});
	}
	render() {
		return (
			<div>
				The count is at: {this.state.count}
				<button onClick={this.handleClick}>Increment Counter</button>
			</div>
		)
	}
}

export default Counter;