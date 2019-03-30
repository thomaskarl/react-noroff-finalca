import React from 'react';
import Card from './../components/Card';
import Search from './../components/Search';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cardObj: [],
			cards: [],
			cardsSearch: []
		};
		this.getData = this.getData.bind(this);
		this.handleSearchTerm = this.handleSearchTerm.bind(this);
	}

	componentDidMount() {
		this.getData();
	}

	getData() {
		fetch('https://api.magicthegathering.io/v1/cards').then(response => {
			return response.json()
		})
			.then(result => {
				console.log(result);
				this.setState({
					cardsSearch: result.cards,
					cardObj: result.cards
				});
			});
	}

	handleSearchTerm(searchTerm) {
		let characterObj = this.state.cardsSearch;
		let characters = characterObj.filter((character) => {
			return character.name.includes(searchTerm);
		});

		this.setState({
			cards: [],
			cardObj: characters
		}, this.createCards);
	}

	createCards() {
		this.state.cardObj.forEach((value, key) => {
			this.state.cards.push(
				<Card
					name={value.name}
					image={value.imageUrl}
					manacost={value.manaCost}
					type={value.type}
					rarity={value.rarity}
					text={value.text}
					id={value.multiverseid}
					key={key}
				>
				</Card>
			);
		});
	}

	render() {
		this.createCards();
		return (
			<div className="container-fluid">
				<div className="col-sm-12">
					<Search onSearchTerm={this.handleSearchTerm}></Search>
				</div>
				<div className="pers col-sm-12">
					<div className="flip-wrapper">
						{this.state.cards}
					</div>
				</div>
			</div>
		);
	}
}
