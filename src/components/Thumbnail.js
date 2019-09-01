import React from 'react'
import '../styles/Thumbnail.css'

class Thumbnail extends React.Component {

state = {
	active: false
}

toggleClass () {
	let currentState = this.state.active
		 this.setState({ active: !currentState })
 }

render () {
	return (
			<div className="thumbnails">
					<p><h3>{this.props.place.title}</h3></p>
					<p>${this.props.place.price}</p>
					<p>{this.props.place.location}</p>
					<button className={this.state.active ? "liked": "like"} onClick={() => this.toggleClass()} >Like</button>
			</div>
	)
}

}

export default Thumbnail
