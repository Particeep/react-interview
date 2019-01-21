import React from 'react'

export const DeleteButton = ({ onClick }) => (
	<button className="delete-btn" type="button" onClick={onClick}>
		<i className='fas fa-times'></i>
	</button>
)

export const LikeButton = ({ active, onClick }) => (
	<button className={`like-btn ${active}`} type="button" onClick={onClick}>
		<i className='fas fa-thumbs-up'></i>
	</button>
)

export const DislikeButton = ({ active, onClick }) => (
	<button className={`dislike-btn ${active}`} type="button" onClick={onClick}>
		<i className='fas fa-thumbs-down'></i>
	</button>
)

export const FilterButton = ({ value, active, onClick }) => (
	<button className={`filter-btn ${active}`} type="button" onClick={onClick}>
		{ value }
	</button>
)
