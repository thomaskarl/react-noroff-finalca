import React from 'react';
import CardComp from './../components/CardComp';
import SearchComp from './../components/SearchComp';
import NavigationComp from "./../components/NavigationComp";

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cardObj: [],
			cards: [],
			cardsSearch: []
		};
		this.changeToSpecific = this.changeToSpecific.bind(this);
		this.handleSearchTerm = this.handleSearchTerm.bind(this);
	}

	componentDidMount() {
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

	changeToSpecific(id) {
		this.props.history.push("/card-specific/" + id);
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
			if (value.imageUrl) {
				this.state.cards.push(
					<CardComp
						changeToSpecific={this.changeToSpecific}
						name={value.name}
						image={value.imageUrl}
						type={value.type}
						rarity={value.rarity}
						text={value.text}
						id={value.id}
						key={key}
					>
					</CardComp>
				);
			} else {
				console.log('is how many cards that are not loaded because the imageurl is broken');
			}
		});
	}

	render() {
		this.createCards();
		return (
			<div>
				<NavigationComp/>
				<div className={'container-fluid'}>
					<div className={'col-sm-12'}>
						<SearchComp onSearchTerm={this.handleSearchTerm}></SearchComp>
					</div>
					<div className={'pers col-sm-12'}>
						<div className={'flip-wrapper'}>
							{this.state.cards}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
