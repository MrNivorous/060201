import React from 'react'
import '../styles/Places.css'


class Thumbnail extends React.Component {

state = {
	place: this.props.place
}

render () {
	return (
			<div className="thumbnails">
					<h3>
					{this.props.place.title}</h3>
					<span>${this.props.place.price}</span>
					<span>{this.props.place.location}</span>
			</div>
	)
}

}

export default Thumbnail
