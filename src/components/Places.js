import React from 'react'

class Places extends React.Component {
	state = {
		places: [
			{title: 'November trip', price: 250, location: 'Mexico'},
			{title: 'December trip', price: 500, location: 'Portugal'},
			{title: 'April trip', price: 400, location: 'California'},
			{title: 'May trip', price: 400, location: 'Las Vegas'}
		]
	}

	render() {
		return (
			<div>(this.state.name)</div>
		)
	}
}
