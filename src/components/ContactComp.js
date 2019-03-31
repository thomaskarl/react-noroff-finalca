import React from 'react';

export default class ContactComponent extends React.Component {

	constructor(props) {
		super(props);
		this.enterCheck = this.enterCheck.bind(this);
	}

	enterCheck() {
		let inputs = {
			firstName:   this.refs.firstName.value,
			lastName:    this.refs.lastName.value,
			email:       this.refs.email.value,
			phone:       this.refs.phone.value,
			message:     this.refs.message.value
		};
		this.props.check(inputs);
	}

	render() {
		return (
			<div className={'container contact__content'}>
				<h2 className={'contact__content--heading'}>Contact</h2>
				<form className={'contact__form'}>
					<div className={'input__container'}>
						<input type='text' name='firstName' ref='firstName' placeholder='First name*'/>
						<input type='text' name='lastName' ref='lastName' placeholder='Last name*'/>
						<input type='email' name='email' ref='email' placeholder='Electronic mail address*'/>
						<input type='tel' name='phone' ref='phone' placeholder='Phone number*'/>
						<input name='message' ref='message' placeholder='Message*'/>
					</div>
					<button className={'contact__button btn btn-primary'} type='button' onClick={this.enterCheck}>Send</button>
					<br/><br/>
					<p className={'contact__paragraph'}>*Required</p>
					<p className={'contact__error'}>
						{this.props.firstNameError}
						{this.props.lastNameError}
						{this.props.emailError}
						{this.props.phoneError}
						{this.props.messageError}
					</p>
				</form>
			</div>
		);
	}
}
