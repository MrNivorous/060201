import React from 'react'
import '../styles/Thumbnail.css'

class Thumbnail extends React.Component {

state = {
}

render () {
	return (
			<div className="thumbnails">
					{this.props.place.title}
					${this.props.place.price}
					{this.props.place.location}
			</div>
	)
}

}

export default Thumbnail
