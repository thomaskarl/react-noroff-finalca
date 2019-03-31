import React from 'react';
import CardSpecificComp from './../components/CardSpecificComp';
import NavigationComp from "./../components/NavigationComp";

export default class CardSpecific extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			cardObj: [],
			cardId: this.props.match.params.id,
		}
	}

	componentDidMount() {
		fetch('https://api.magicthegathering.io/v1/cards/' + this.state.cardId)
			.then(response => {
				return response.json()
			})
			.then(result => {
				this.setState({
					cardObj: result.card
				})
			});
	}

	render() {
		return (
			<div>
				<NavigationComp/>
				<div className={'row'}>
					<div className={'col-sm-12'}>
						<CardSpecificComp image={this.state.cardObj.imageUrl}
						                  name={this.state.cardObj.name}
						                  text={this.state.cardObj.text}
						                  type={this.state.cardObj.type}
						                  colors={this.state.cardObj.colors}
						                  rarity={this.state.cardObj.rarity}
						                  artist={this.state.cardObj.artist}
						>
						</CardSpecificComp>
					</div>
				</div>
			</div>
		);
	}
}
