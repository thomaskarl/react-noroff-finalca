import React from 'react';
import {withRouter} from 'react-router-dom';


class Login extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			message: 'Please enter username and password',
		};

		this.handlePassChange = this.handlePassChange.bind(this);
		this.handleUserChange = this.handleUserChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(evt) {
		evt.preventDefault();

		if (this.state.username !== localStorage.getItem('username') || this.state.password !== localStorage.getItem('password')) {
			if (this.state.username !== localStorage.getItem('username')) {
				this.setState({message: 'Please enter CORRECT login details'});
			}
			if (this.state.password !== localStorage.getItem('password')) {
				this.setState({message: 'Please enter CORRECT login details'});
			}
		} else {
			let path = `Home`;
			this.props.history.push(path);
		}
	}


	handleUserChange(evt) {
		this.setState({
			username: evt.target.value,
		});
	};

	handlePassChange(evt) {
		this.setState({
			password: evt.target.value,
		});
	}

	render() {
		return (
			<div className={'row'}>
				<div className={'Login col-sm-12 m-3 p-2'}>
					<form onSubmit={this.handleSubmit}>
						<h1 className={'m-3'}>Status: {this.state.message}</h1>
						<div className={'m-3'}>
							<label>Username</label>
							<input type='text'
							       value={this.state.username}
							       onChange={this.handleUserChange}
							       name='username'
							       className='login-input'
							       placeholder='Username'/>
						</div>
						<div className={'m-3'}>
							<label>Password</label>
							<input type='password'
							       value={this.state.password}
							       onChange={this.handlePassChange}
							       name='password'
							       className='login-input'
							       placeholder='Password'/>
						</div>
						<button className={'btn btn-primary m-3'} type='submit'>Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default withRouter(Login);

