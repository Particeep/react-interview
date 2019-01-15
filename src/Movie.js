import React, { Component } from "react";
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import "./Movie.css";

export default class Movie extends Component {
	renderRating() {
		let likes = (this.props.likes / (this.props.likes + this.props.dislikes)) * 100;
		return (
			<div className="rating">
				<span onClick={() => this.props.onLike(this.props.id)}>
					<MdThumbUp />
					<data>{this.props.likes}</data>
				</span>
				<span onClick={() => this.props.onDislike(this.props.id)}>
					<data>{this.props.dislikes}</data>
					<MdThumbDown />
				</span>
				<div className="ratio">
					<div className="likes" style={{ width: likes + "%" }} />
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className="movie">
				<div className="title">{this.props.title}</div>
				<div className="category">{this.props.category}</div>
				{this.renderRating()}
				<button className="delete" onClick={() => this.props.onDelete(this.props.id)}>
					Supprimer
				</button>
			</div>
		);
	}
}
