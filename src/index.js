import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// class Login extends React.Component {
// 	constructor(props) {
// 		super(props);
//
// 		this.state = {
// 			username: '',
// 			password: '',
// 			message: 'hei',
// 			showUsernameError: false,
// 			inputUsernameError: false,
// 			showPasswordError: false,
// 			inputPasswordError: false
// 		};
// 	}
//
// 	submit = e => {
// 		if (this.username !== localStorage.getItem('username') || this.password !== localStorage.getItem('password')) {
// 			if (this.username !== localStorage.getItem('username')) {
// 				this.message = 'Please enter correct login details';
// 				this.showUsernameError = true;
// 				this.inputUsernameError = true;
// 			} else {
// 				this.showUsernameError = false;
// 				this.inputUsernameError = false;
// 			}
// 			if (this.password !== localStorage.getItem('password')) {
// 				this.message = 'Please enter correct login details';
// 				this.showPasswordError = true;
// 				this.inputPasswordError = true;
// 			} else {
// 				this.showPasswordError = false;
// 				this.inputPasswordError = false;
// 			}
// 		} else {
// 			return console.log('OK');
// 		}
//
// 		e.preventDefault();
// 	};
//
// 	handleChange = event => {
// 		this.setState({
// 			[event.target.id]: event.target.value
// 		});
// 	};
//
// 	render() {
// 		return (
// 			<div className='Login'>
// 				<form onSubmit={this.submit}>
// 					<h1>Status: {this.state.message}</h1>
// 					<div>
// 						<label>Username</label>
// 						<input type='text'
// 						       onChange={this.handleChange}
// 						       name='username'
// 						       className='login-input'
// 						       placeholder='Username'/>
// 					</div>
// 					<div>
// 						<label>Password</label>
// 						<input type='password'
// 						       onChange={this.handleChange}
// 						       name='password'
// 						       className='login-input'
// 						       placeholder='Password'/>
// 					</div>
// 					<button type='submit'>Submit</button>
// 				</form>
// 			</div>
// 		);
// 	}
// }


ReactDOM.render(<App />, document.getElementById('root'));

