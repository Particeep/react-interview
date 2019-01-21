import React from 'react'

export const LikesBar = ({ likes, dislikes }) => {
	const ratio = Math.round((100 * likes) / (likes + dislikes))

	return(
		<div className="likes-bar">
			<div className="inner-bar" style={{width: `${ratio}%`}}></div>
		</div>
	)
}
