import React, { Component } from "react";
import FlipMove from "react-flip-move";
import "./Multiselect.css";

export default class Multiselect extends Component {
	selectOption(option) {
		if (!this.props.multiple) {
			document
				.querySelectorAll(".filter-container." + this.props.type + " .dropdown > div")
				.forEach(el => {
					el.classList.remove("selected");
				});
			this.selected = option;
		}

		document
			.querySelector(".dropdown > div[option='" + option + "']")
			.classList.toggle("selected");
		this.props.onSelect(option);
	}

	renderSelect() {
		return this.props.options.map(option => {
			return (
				<div key={option} option={option} onClick={() => this.selectOption(option)}>
					<span>{option}</span>
				</div>
			);
		});
	}

	toggleDropdown(e) {
		if (e.target !== document.querySelector(".filter-container." + this.props.type))
			return;

		document
			.querySelector(".filter-container:not(." + this.props.type + ") .dropdown")
			.classList.remove("active");
		document
			.querySelector(".filter-container." + this.props.type + " .dropdown")
			.classList.toggle("active");
	}

	componentDidMount() {
		if (this.props.selected) {
			document
				.querySelector(".dropdown > div[option='" + this.props.selected + "']")
				.classList.toggle("selected");
			this.selected = this.props.selected;
		}
	}

	render() {
		if (!this.props.options || this.props.options.length === 0)
			return "Aucun film disponible";

		return (
			<div
				className={"filter-container " + this.props.type}
				onClick={e => this.toggleDropdown(e)}>
				{this.props.type === "categories" ? "Filter par:" : "Afficher: " + this.selected}
				<FlipMove className="dropdown">{this.renderSelect()}</FlipMove>
			</div>
		);
	}
}
