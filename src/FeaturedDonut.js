import React, { Component } from 'react'


const FeaturedDonut = (props) => { //stateless or presentational component
	console.log(props);
	return (
		<div>
			Today's featured donut is {props.donut}
		</div>
	)
}

/* //This is a stateful component but is overkill so the above stateless component is used instead
class FeaturedDonut extends Component {
	render() {
    	console.log(this.props);
		return (
			<div>
				Today's featured donut is {this.props.donut}
			</div>
		)
	}
}
*/

export default FeaturedDonut