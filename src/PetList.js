import React from 'react'

//this is a stateless component so you don't need Component

const showAnimal = (animal) => {
		return (
			<li key={animal.name}>
			 {animal.name}
			 <img src={animal.picture} />
			 </li>
		)
}

const PetList = ({ animals }) => {
//const PetList = (props) => {
	//const animals = props.animals;
	return (
		<div>
			<h1>My Pets</h1>
			<ul>
				{animals.map(showAnimal)}
			</ul>
		</div>
	)
}

export default PetList