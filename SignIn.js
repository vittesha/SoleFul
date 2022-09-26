import React, {useState,setState} from 'react';
import '../Base.css';
function SignIn() {
    
    const [Name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "Name"){
            setName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log("You are signed in, now");
    }

    return(
      <>
        <h3>Sign In</h3>
        <div className="account-page">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <div className="form-container"> 
                  <form id="SignInForm">
                    
                  <input type="text" value={Name} onChange = {(e) => handleInputChange(e)} id="Name" placeholder="Enter your name" />
                    <input  type="email" id="email" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Enter your Email"/>
                    <input type="password" id="password" value={password} onChange = {(e) => handleInputChange(e)}placeholder="Enter your password" />
                    <button type="submit" onClick={()=>handleSubmit()}>Sign In</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )       
}

export default SignIn