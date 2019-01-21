import React, { Component } from 'react'
import './App.css'

import MoviesList from './MoviesList'

class App extends Component {

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Movies Store</h1>
				</header>
				<MoviesList />
			</div>
		)
	}
}

export default App
