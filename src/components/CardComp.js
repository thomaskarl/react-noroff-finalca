import React from 'react';

const buttonStyle = {
	color: 'black'
};

export default class CardComp extends React.Component {
	constructor(props) {
		super(props);
		this.goSpecific = this.goSpecific.bind(this);
	}

	goSpecific() {
		let cardId = this.props.id;
		this.props.changeToSpecific(cardId);
	}

	render() {
		return (
			<div className={'flip-container'}>
				<div className={'trigger'}>
					<div className={'front'}>
						<div>
							<img src={this.props.image} alt="card"/>
						</div>
					</div>
					<div className={'back'}>
						<div>
							<span className={'font-weight-bold'}>Name: </span><span>{this.props.name}</span><br/>
							<span className={'font-weight-bold'}>Type: </span><span>{this.props.type}</span>
						</div>
						<button style={buttonStyle} className={'back__button align-self-center m-3 p-2'} type='button' onClick={this.goSpecific}>Read
							more
						</button>
					</div>
				</div>
			</div>
		);
	}
}
