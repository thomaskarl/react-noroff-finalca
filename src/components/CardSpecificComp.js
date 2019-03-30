import React from 'react';

export default class CardSpecificComp extends React.Component {
	render() {
		return (
			<div className="[ row ]">
				<div className="[ col-sm-4 ]">
					<img src={this.props.image} alt="card"/>
				</div>
				<div className="[ col-sm-4 ]">
					<h2>
						{this.props.id}
					</h2>
				</div>
			</div>
		);
	}
}
