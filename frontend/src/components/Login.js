import React from 'react';
import users from '../sample-users';
import Inventory from './Inventory';
import Navbar from './Navbar';

class Login extends React.Component {
    state = {
        validUsers: users,
        username: "",
        pwd: "",
        admin: false,
        cred: false,
    }

    handleChange = (event) => {
        this.setState({ [event.currentTarget.name]: event.currentTarget.value });
    }
    render() {
        if (this.state.cred === false) {
            return (
                <>
                    <Navbar />
                    <div className='login' >
                        <h2>Login</h2>
                        <p>Sign In to manage Store</p>
                        <input type="text" name="username" onChange={this.handleChange} placeholder='Username' />
                        <input type="text" name="pwd" onChange={this.handleChange} placeholder='Password' />
                        <select type="text" name="admin" onChange={this.handleChange}  >
                            <option value="true">Admin</option>
                            <option value="false">User</option>
                        </select>
                        <div className='btns'>
                            <button onClick={() => this.setState({ cred: true })}>Login</button>
                        </div>
                    </div >
                </>
            );
        }
        else {
            return (
                <Inventory cred={this.state.cred} username={this.state.username} />
            )
        }
    }

};

export default Login;