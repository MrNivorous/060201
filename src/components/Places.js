import React from 'react'

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

	render() {

		let num = this.state.places.length
		return (
			<div>
			<h1>{num} Places</h1>
			<div className="thumbnails">
				{this.state.places.map((places,index) =>  <p key={index}>{places.title} - ${places.price} - {places.location}</p>)}

			</div>


		</div>
	)
}
}


export default Places
