import React from 'react';

export default class Card extends React.Component {
	render() {
		return (
			<div className="flip-container">
				<div className="trigger">
					<div className="front">
						<div>
							<img src={this.props.image} alt="card"/>
						</div>
					</div>
					<a href={'#/cardspecific/' + this.props.id}>
						<div className="back">
							<div>
								<p>Name: {this.props.name}</p>
								<p>Type: {this.props.type}</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		);
	}
}
