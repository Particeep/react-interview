import React, { Component } from 'react';
import './styles.css';

class LikeBar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			likes : props.likes,
			dislikes : props.dislikes,
			total : props.likes + props.dislikes,
			userOpinion : ''
		}
	}

	handleUserOpinion = (event) => {
		event.persist()
		this.setState(prevState =>({
			userOpinion: event.target.value,
			likes : !(prevState.userOpinion === '' && event.target.value === 'dislike') ? ((prevState.userOpinion === '' && event.target.value === 'like') || prevState.userOpinion === 'dislike' ? prevState.likes + 1 : prevState.likes- 1) : prevState.likes,
			dislikes : !(prevState.userOpinion ==='' && event.target.value === 'like')  ? ((prevState.userOpinion === '' && event.target.value === 'dislike') || prevState.userOpinion === 'like' ? prevState.dislikes + 1 : prevState.dislikes- 1) : prevState.dislikes,
			total : prevState.userOpinion === '' ? prevState.total + 1 : prevState.total
		}))

	}

	render() {
		return (
			<div className="like-bar-container">
				<form onChange={this.handleUserOpinion}>
					<div>
						<input className="radio-button" id={`like${this.props.id}`} type="radio" name="likeDislike" value="like" />
						<label className="like" htmlFor={`like${this.props.id}`}></label>
						<span>{this.state.likes}</span>
					</div>
					<div>
						<input className="radio-button" id={`dislike${this.props.id}`} type="radio" name="likeDislike" value="dislike" />
						<label className="dislike" htmlFor={`dislike${this.props.id}`}></label>
						<span>{this.state.dislikes}</span>
					</div>
				</form>
				<progress max={this.state.total} value={this.state.likes}/>
			</div>

		);
	}
}

export default LikeBar;
