import React from 'react';

export default class CardSpecificComp extends React.Component {
	render() {
		return (
			<div className={'row cs-container'}>
				<div className={'col-sm-4 cs__content'}>
					<img className={'cs__content--image'} src={this.props.image} alt='card'/>
				</div>
				<div className={'col-sm-4 cs__content'}>
					<h2 className={'cs__content--heading '}>
						<span className={'font-weight-bold'}>{this.props.name}</span></h2>
					<p className={'cs__content--text'}>
						<span className={'font-weight-bold'}>About:</span>{this.props.text}</p>
					<p className={'cs__content--text'}>
						<span className={'font-weight-bold'}>Type:</span>{this.props.type}</p>
					<p className={'cs__content--text'}>
						<span className={'font-weight-bold'}>Color:</span>{this.props.colors}</p>
					<p className={'cs__content--text'}>
						<span className={'font-weight-bold'}>Rarity:</span>{this.props.rarity}</p>
					<p className={'cs__content--text'}>
						<span className={'font-weight-bold'}>About:</span>{this.props.text}</p>
					<p className={'cs__content--text'}>
						<span className={'font-weight-bold'}>Artist:</span>{this.props.artist}</p>
				</div>
			</div>
		);
	}
}
