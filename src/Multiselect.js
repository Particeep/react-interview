import React, { Component } from "react";
import FlipMove from "react-flip-move";
import "./Multiselect.css";

export default class Multiselect extends Component {
	selectCategory(category) {
		document
			.querySelector(".dropdown > div[category=" + category + "]")
			.classList.toggle("selected");
		this.props.onSelect(category);
	}

	renderSelect() {
		return this.props.categories.map(category => {
			return (
				<div
					key={category}
					category={category}
					onClick={() => this.selectCategory(category)}>
					<span>{category}</span>
				</div>
			);
		});
	}

	toggleCategories(e) {
		if (e.target !== document.querySelector(".filter-container")) return;
		document.querySelector(".filter-container .dropdown").classList.toggle("active");
	}

	render() {
		if (!this.props.categories || this.props.categories.length === 0)
			return "Aucun film disponible";

		return (
			<div className="filter-container" onClick={e => this.toggleCategories(e)}>
				Filtrer par:
				<FlipMove className="dropdown">{this.renderSelect()}</FlipMove>
			</div>
		);
	}
}
