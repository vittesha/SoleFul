import React from 'react';
import users from '../sample-users';
import Inventory from './Inventory';

class Login extends React.Component {
    state = {
        validUsers: users,
        username: "",
        pwd: "",
        status: false,
        cred: false,
    }

    handleChange = (event) => {
        this.setState({ [event.currentTarget.name]: event.currentTarget.value });
    }
    checkCred = () => {
        if (this.state.username === this.state.validUsers.name
            && this.state.pwd === this.state.validUsers.pwd
            && this.state.status === this.state.validUsers.status)
            this.setState({ cred: true });
        return this.setState({ cred: false });
    }
    render() {
        return (
            <>
                <div className='login' >
                    <h2>Login</h2>
                    <p>Sign In to manage Store</p>
                    <input type="text" name="username" onChange={this.handleChange} placeholder='Username' />
                    <input type="text" name="pwd" onChange={this.handleChange} placeholder='Password' />
                    <select type="text" name="status" onChange={this.handleChange}  >
                        <option value='admin'>Admin</option>
                        <option value='user'>User</option>
                    </select>
                    <div className='btns'>
                        <button onClick={() => this.checkCred()}>Login</button>
                    </div>
                </div >
                <Inventory cred={this.state.cred} />
            </>
        );
    }

};

export default Login;