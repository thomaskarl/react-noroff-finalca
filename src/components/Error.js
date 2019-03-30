import React from 'react';

const pStyle = {
	fontSize: '100px',
	textAlign: 'center'
};

const Error = () => {
	return (
		<div className={'error-container'}>
			<p style={pStyle}>Error, this page doesn't exist</p>
		</div>
	);
};

export default Error;
