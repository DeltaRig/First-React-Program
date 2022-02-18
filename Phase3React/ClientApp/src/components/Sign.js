import React, { Component } from 'react'
import register from '../registerServiceWorker';


export class Sign extends Component {
    constructor() {
        super();

        this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);

        this.state = {
            loading: true,
            user: {
                id: 0,
                name: '',
                password: '',
            },
            register: {
                id: 0,
                name: '',
                password: '',
                password2: '',
                admin: false
            },
            userCleared: {
                id: 0,
                name: '',
                password: '',
                password2: '',
                admin: false
            },
            users: [
                {
                    id: 1,
                    name: 'Dani',
                    password: 'admin',
                    admin: true
                },
                {
                    id: 2,
                    name: 'Hari',
                    password: '1234',
                    admin: false
                },
                {
                    id: 2,
                    name: 'Ram',
                    password: '1234',
                    admin: false
                }
            ]
        }
    }

    handleRegistrationSubmit(event) {
        event.preventDefault();
        console.log('this:', this);
        console.log('Form submitted:', this.state.register);
        this.setState((prevState) => {
            // is missing validate if the user already exist
            const userId = prevState.users.length === 0 ? 1 : prevState.users[prevState.users.length - 1].id + 1;
            let users = this.state.users;
            this.state.register.id = userId;

            // check if the password is right
            if (this.state.register.password == this.state.register.password2) {
                users.push({
                    id: this.state.register.id, name: this.state.register.name,
                    password: this.state.register.password, admin: this.state.register.admin
                });
                this.setState({ register: this.state.userCleared, users: users });
            }

            console.log('this:', this);
        });
    }

    handleLoginSubmit(event) {
        event.preventDefault();
        // missing implement an validation
    }
    

    handleNameRegisterChange = (e) => {
        console.log('name:', e.target.value);
        const register = this.state.register;
        this.setState({ register: { ...register, name: e.target.value } });
    }

    handlePasswordRegisterChange = (e) => {
        console.log('password:', e.target.value);
        const register = this.state.register;
        this.setState({ register: { ...register, password: e.target.value } });
    }

    handlePassword2RegisterChange = (e) => {
        console.log('password:', e.target.value);
        const register = this.state.register;
        this.setState({ register: { ...register, password2: e.target.value } });
    }

    handleNameChange = (e) => {
        console.log('name:', e.target.value);
        const user = this.state.user;
        this.setState({ user: { ...user, name: e.target.value } });
    }

    handlePasswordChange = (e) => {
        console.log('password:', e.target.value);
        const user = this.state.user;
        this.setState({ user: { ...user, password: e.target.value } });
    }

    renderRegistration() {
        return (
            <div className="col-sm-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <form onSubmit={this.handleRegistrationSubmit}>
                            <h3>Registration</h3>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" name="name"
                                    placeholder="Enter your user name" value={this.state.register.name}
                                    onChange={this.handleNameRegisterChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <input type="password" className="form-control" id="password" name="password"
                                    placeholder="Enter your user password" value={this.state.register.password}
                                    onChange={this.handlePasswordRegisterChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <input type="password" className="form-control" id="password" name="password"
                                    placeholder="Enter your user password again" value={this.state.register.password2}
                                    onChange={this.handlePassword2RegisterChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    renderLogin() {
        return (
            <div className="col-sm-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <form onSubmit={this.handleLoginSubmit}>
                            <h3>Login</h3>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" name="name"
                                    placeholder="Enter your user name" value={this.state.user.name}
                                    onChange={this.handleNameChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <input type="password" className="form-control" id="password" name="password"
                                    placeholder="Enter your user password" value={this.state.user.password}
                                    onChange={this.handlePasswordChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className='row flex-container space-evenly'>
                {this.renderRegistration()}
                {this.renderLogin()}
            </div>
        );
    }
}