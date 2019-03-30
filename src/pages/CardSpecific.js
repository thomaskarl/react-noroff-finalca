import React from 'react';
import CardSpecificComp from './../components/CardSpecificComp';

export default class CardSpecific extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			cardObj: [],
			cardId: this.props.match.params.id,
		}
	}

	componentDidMount() {
		fetch('https://api.magicthegathering.io/v1/cards')
			.then(response => {
				return response.json()
			})
			.then(result => {
				this.setState({
					cardObj: result.cards
				});

				console.log(this.state.cardId);
			});
	}

	render() {
		return (
			<div className="[ row ]">
				<div className="[ col-sm-12 ]">
					<CardSpecificComp image={this.state.cardObj.image}
					                  name={this.state.cardObj.name}
					                  id={this.state.cardObj.cardId}
					>
					</CardSpecificComp>
				</div>
			</div>
		);
	}
}
