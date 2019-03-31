import React from 'react';
import ContactComp from './../components/ContactComp';
import NavigationComp from "./../components/NavigationComp";

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: false,
			lastName: false,
			email: false,
			phone: false,
			message: false
		};
		this.check = this.check.bind(this);
	}

	check(inputs) {
		const mailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		const phonePattern1 = /\d{3} \d{3} \d{4}/;
		const phonePattern2 = /\d{3}[./]\d{3}[./]\d{4}/;
		const phonePattern3 = /\d{3}[-]\d{3}[-]\d{4}/;

		if (!inputs.firstName) {
			this.setState({firstName: 'First name NOT valid'});
			return;
		} else {
			this.setState({firstName: false});
		}

		if (!inputs.lastName) {
			this.setState({lastName: 'Last name NOT valid'});
			return;
		} else {
			this.setState({lastName: false});
		}

		if (!mailPattern.test(inputs.email)) {
			this.setState({email: 'E-mail NOT valid'});
			return;
		} else {
			this.setState({email: false});
		}

		if (!phonePattern1.test(inputs.phone) && !phonePattern2.test(inputs.phone) && !phonePattern3.test(inputs.phone)) {
			this.setState({phone: 'Phone number NOT valid'});
			return;
		} else {
			this.setState({phone: false});
		}

		if (!inputs.message) {
			this.setState({message: 'Message NOT valid'});
			return;
		} else {
			this.setState({message: false});
		}

		alert('Your message: ' + inputs.message + ' - has been sent');
	}

	render() {
		return (
			<div>
				<NavigationComp/>
				<ContactComp
					check={this.check}
					firstNameError={this.state.firstName}
					lastNameError={this.state.lastName}
					emailError={this.state.email}
					phoneError={this.state.phone}
					messageError={this.state.message}
				>
				</ContactComp>
			</div>
		);
	}
}
