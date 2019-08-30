import React from 'react'
import '../styles/Places.css'
import Favorites from './Favorites'
import Thumbnail from './Thumbnail'

class Places extends React.Component {
	state = {
		places: [
			{title: 'November trip', price: 250, location: 'Mexico'},
			{title: 'December trip', price: 500, location: 'Portugal'},
			{title: 'April trip', price: 400, location: 'California'},
			{title: 'May trip', price: 400, location: 'Las Vegas'},
			{title: 'January trip', price: 200, location: 'Thailand'}
		]
	}
	// let num = this.state.places.length

	render() {


		return (
		<div>
			<div>
				{this.state.places.map((place, index) => {return  (<Thumbnail key={index} place={place} />)})}
			</div>
			<div><Favorites /></div>

		</div>
	)
}
}


export default Places

			// <div><Thumbnail /></div>
			// <h1>{num} Places</h1>
