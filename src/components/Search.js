import React from 'react';

export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.handleCharacterSearchTerm = this.handleCharacterSearchTerm.bind(this);
	}

	handleCharacterSearchTerm() {
		let phrase = this.refs.searchTerm.value;
		this.props.onSearchTerm(phrase);
	}

	render() {
		return (
			<div className="search">
				<h2>Search for a card</h2>
				<input type="text"
				       ref="searchTerm"
				       onChange={this.handleCharacterSearchTerm}
				       className="form-control"
				       placeholder="Ex. Aven"
				/>
			</div>
		);
	}
}
